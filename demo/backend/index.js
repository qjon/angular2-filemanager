var express = require('express');
var sizeOf = require('image-size');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var formidable = require('formidable');
var mime = require('mime-types');
var easyimg = require('easyimage');

var fs = require('fs');

var baseDir = '/data/'
var basePath = __dirname + '/..' + baseDir;

var isDirectory = function (path) {
  try {
    var dir = fs.statSync(basePath + path);

    return dir && dir.isDirectory();
  } catch (e) {
    return false;
  }
};

var isFile = function (path) {
  try {
    var file = fs.statSync(basePath + path);

    return file && file.isFile();
  } catch (e) {
    return false;
  }
};

app.use(bodyParser.json());
app.use(express.static(basePath));

app.get('/folders', function (req, res) {
  var paths = [];
  var subNode = req.query.nodeId || '';
  var items = fs.readdirSync(basePath + subNode);

  for (var i = 0; i < items.length; i++) {
    var name = items[i];
    var stat = fs.statSync(basePath + subNode + '/' + name);
    if (stat && stat.isDirectory()) {
      var dir = {
        id: subNode + '/' + name,
        parentId: subNode || null,
        name: name,
        children: []
      };

      paths.push(dir);
    }
  }

  res.json(paths);

});

app.put('/folders', function (req, res) {
  var node = req.body;

  if (isDirectory(node.id)) {
    var subNodes = node.id.split('/');
    subNodes[subNodes.length - 1] = node.name;
    var newNodeName = subNodes.join('/');

    if (isDirectory(newNodeName)) {
      res.sendStatus(403);
      res.json({msg: 'Directory already exists'});
    }
    else {
      fs.renameSync(basePath + node.id, basePath + newNodeName);

      if (isDirectory(newNodeName)) {
        node.id = newNodeName;
        res.json(node);
      } else {
        res.sendStatus(403);
        res.json({msg: 'Could not change node name'});
      }
    }

  } else {
    res.sendStatus(403);
    res.json({msg: 'Node does not exist'});
  }
});

app.put('/folders/move', function (req, res) {
  var data = req.body;
  console.log(data);

  if (data.target === null) {
    data.target = '';
  }

  if (isDirectory(data.source) && isDirectory(data.target)) {
    var subNodes = data.source.split('/');
    var dirName = subNodes[subNodes.length - 1];
    var newNodeName = data.target + '/' + dirName;

    fs.renameSync(basePath + data.source, basePath + newNodeName);
    var dir = {
      id: newNodeName,
      name: dirName,
      parentId: data.target,
      children: []
    };

    res.json(dir);
  } else {
    res.sendStatus(403);
    res.json({msg: 'Node does not exist'});
  }

});

app.post('/folders', function (req, res) {
  var data = req.body;
  var node = data.node;
  var parentFolderId = data.parentNodeId || '';
  var newNodeId = parentFolderId + '/' + node.name;

  if (!isDirectory(newNodeId)) {
    fs.mkdirSync(basePath + newNodeId);

    if (isDirectory(newNodeId)) {
      res.json({
        id: newNodeId,
        name: node.name,
        parentId: parentFolderId || null,
        children: []
      });
    } else {
      res.sendStatus(403);
      res.json({msg: 'Node has not been added'});
    }

  } else {
    res.sendStatus(403);
    res.json({msg: 'Node exists'});
  }
});


app.delete('/folders', function (req, res) {
  var data = req.body;
  var nodeId = data.nodeId || null;

  if (isDirectory(nodeId)) {
    fs.rmdirSync(basePath + nodeId);
    res.json({
      success: !isDirectory(nodeId)
    });
  } else {
    res.sendStatus(403);
    res.json({msg: 'Directory exists'});
  }
});


function prepareFile(filePath) {
  var src = path.join('/uploads', filePath).replace(/ /g, '\\ ');
  var mimeType = mime.lookup(filePath);
  var isImage = false;
  var dimensions;
  var dirs = filePath.split('/');
  var name = dirs.pop();

  if (mimeType) {
    isImage = mimeType.indexOf('image') === 0;
  }

  if (isImage) {
    dimensions = sizeOf(path.join(basePath, filePath))
  }


  return {
    id: filePath,
    folderId: dirs.join('/'),
    name: name,
    thumbnailUrl: src,
    url: src,
    type: mimeType,
    width: isImage ? dimensions.width : 0,
    height: isImage ? dimensions.height : 0
  };
}

var getFilesFromDirectory = function (subdir) {
  var files = [];
  var items = fs.readdirSync(basePath + subdir);

  for (var i = 0; i < items.length; i++) {
    var name = items[i];
    var stat = fs.statSync(basePath + subdir + '/' + name);
    if (stat && stat.isFile()) {
      var path2 = path.join(subdir, name);

      files.push(prepareFile(path2));
    }
  }

  return files;
};
app.get('/files', function (req, res) {
  var subdir = req.query.dirId || '';

  res.json(getFilesFromDirectory(subdir));

});


app.post('/files', function (req, res) {
  var fileExist = false;
  var newPath;
  var form = new formidable.IncomingForm();

  form.multiples = true;

  form.uploadDir = basePath;

  form.on('file', function (field, file) {
    var folder = req.header('folderId');

    file.name = file.name.replace(/[^A-Za-z0-9\-\._]/g, '');

    if (folder) {
      newPath = path.join(folder, file.name);
    } else {
      newPath = file.name;
    }

    if (isFile(newPath)) {
      fileExist = true;
      fs.unlinkSync(file.path);
    } else {
      fs.renameSync(file.path, basePath + newPath);
    }
  });

  form.on('error', function (err) {
    console.log('An error has occured: \n' + err);
  });

  form.on('end', function () {
    if (fileExist) {
      res.statusCode = 409;
      res.end('error');
    } else {
      res.json(prepareFile(newPath));
    }
  });

  form.parse(req);
});


app.put('/files', function (req, res) {
  var body = req.body;
  var fileId = body.id || null;
  var bounds = body.bounds || null;
  var files = body.files || null;
  var folderId = body.folderId || '';


  // move file
  if (folderId !== null && files !== null) {
    files.forEach(function (fileId) {
      const fileName = fileId.split('/').pop();
      fs.renameSync(basePath + fileId, basePath + folderId + '/' + fileName);
    });

    res.json(getFilesFromDirectory(folderId));
    return;
  }

  // crop file
  if (isFile(fileId)) {
    if (bounds) {
      var src = path.join(basePath, fileId);
      easyimg.crop({
        src: src,
        dst: src,
        cropwidth: bounds.width,
        cropheight: bounds.height,
        x: bounds.x,
        y: bounds.y,
        gravity: 'NorthWest'
      });
    }
    res.json(prepareFile(fileId));
  } else {
    res.status(403);
    res.json({msg: 'File does not exist'});
  }
});

app.delete('/files', function (req, res) {
  var fileIds = req.query.id.split('|') || null;
  var allFilesDeleted = true;

  fileIds.forEach(function (fileId) {
    if (isFile(fileId)) {
      fs.unlinkSync(path.join(basePath, fileId));
    } else {
      allFilesDeleted = false;
    }
  });

  if (allFilesDeleted) {
    res.json({
      success: true
    });
  } else {
    res.status(403);
    res.json({msg: 'Not all files were deleted'});
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

