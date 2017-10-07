import {FilemanagerNotifcations} from '../services/FilemanagerNotifcations';
import {FileManagerApiService} from './fileManagerApi.service';
import {IOuterNode} from '@rign/angular2-tree';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {filesData} from '../../_unitTestMocks/fileDataMock';
import {UUID} from 'angular2-uuid';
import {rootNode} from '../../_unitTestMocks/folderDataMock';

describe('fileManagerApi.service', () => {
  let service: FileManagerApiService;
  let filemanagerNotifications: FilemanagerNotifcations;
  let rootNode: IOuterNode;
  let nodesData: IOuterNode[];
  let handler: any;
  let files: IOuterFile[];
  let newNode: IOuterNode;
  let newNodeId: string;
  let loadHandler;


  beforeEach(() => {
    rootNode = {
      id: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
      treeId: 'tree',
      name: 'Root folder',
      parentId: '',
      children: [],
      parents: []
    };

    newNode = {
      id: null,
      treeId: 'tree',
      name: 'Nowy folder',
      parentId: null,
      children: [],
      parents: []
    };

    newNodeId = '1111111-2222-3333-4444-123456789012';

    nodesData = [rootNode];

    loadHandler = jasmine.createSpy('loadHandler');

    files = filesData.map(x => {
      const y = Object.assign({}, x);

      y.data = x.url;

      return y;
    });

    localStorage.setItem('fileManagerTree', JSON.stringify(nodesData));
    localStorage.setItem('fileManagerFiles', JSON.stringify(files));

    handler = jasmine.createSpy('handler');
    filemanagerNotifications = <FilemanagerNotifcations>jasmine.createSpyObj('FilemanagerNotifcations', ['sendNotification']);

    service = new FileManagerApiService(filemanagerNotifications);
  });

  afterEach(() => {
    localStorage.removeItem('fileManagerTree');
    localStorage.removeItem('fileManagerFiles');
  });

  describe('load', () => {
    it('should load all nodes from local storage', function () {
      service.load('')
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith([rootNode]);
    });

    it('should use previously load data', function () {
      service.load('');

      service.load('')
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith([rootNode]);
    });
  });

  describe('add', () => {

    beforeEach(() => {

      service.load();

      spyOn(UUID, 'UUID').and.returnValue(newNodeId);
    });

    it('should return added node', () => {
      const expectedNode: IOuterNode = {
        id: newNodeId,
        treeId: 'tree',
        name: 'Nowy folder',
        parentId: rootNode.id,
        children: [],
        parents: []
      };

      service.add(newNode, rootNode.id)
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(expectedNode);

      service.load(rootNode.id)
        .subscribe(loadHandler);

      expect(loadHandler).toHaveBeenCalledWith([expectedNode]);
    });

    it('should return empty value if save files return false and not call handler', () => {
      newNode.name = newNode.name.repeat(1000000);

      service.add(newNode)
        .subscribe(handler);

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('move', () => {
    it('should move node to root', () => {
      service.load();

      spyOn(UUID, 'UUID').and.returnValue(newNodeId);
      service.add(newNode, rootNode.id);

      service.move(newNode, null)
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(newNode);

      service.load()
        .subscribe(loadHandler);

      expect(loadHandler).toHaveBeenCalledWith([rootNode, newNode]);
    });
  });

  describe('update', () => {
    it('should update root node name', () => {
      const newName = 'New rooot name';
      const newRootNode = <IOuterNode>Object.assign({}, rootNode);
      newRootNode.name = newName;

      service.load();

      service.update(newRootNode)
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(newRootNode);

      service.load()
        .subscribe(loadHandler);

      expect(loadHandler).toHaveBeenCalledWith([newRootNode]);
    });
  });

  describe('remove', () => {
    it('should remove root node', () => {
      service.load();

      service.remove(rootNode.id)
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(rootNode);

      service.load()
        .subscribe(loadHandler);

      expect(loadHandler).toHaveBeenCalledWith([]);
    });


    it('should not remove root node if it is not empty', () => {
      service.load();
      spyOn(UUID, 'UUID').and.returnValue(newNodeId);
      service.add(newNode, rootNode.id);

      service.remove(rootNode.id)
        .subscribe(() => {
        }, handler);

      expect(handler).toHaveBeenCalledWith('Node is not empty');

      service.load()
        .subscribe(loadHandler);

      expect(loadHandler).toHaveBeenCalledWith([rootNode]);
    });
  });

  describe('cropFile', () => {
    it('should throw error', () => {

      service.cropFile(filesData[0], {x: 1, y: 2, width: 3, height: 4})
        .subscribe(() => {
        }, handler);

      expect(handler).toHaveBeenCalledWith('This functionality is not available with LocalStorage');
    });
  });

  describe('loadFiles', () => {
    it('should return list of files', () => {
      const expectedData = filesData.map((x) => {
        x.url = '/uploads/' + x.id;
        x.thumbnailUrl = '/uploads/' + x.id;
        return x;
      })
      service.loadFiles('dd9b20d8-260b-54c1-7eca-c22eae257edc')
        .subscribe(handler);


      // expect(handler).toHaveBeenCalledWith(filesData);

    });
  });


  describe('removeSelectedFiles', () => {
    it('should return Observable of TRUE', () => {
      const selectedFiles: string[] = [files[2].id.toString()];
      service.loadFiles('');

      service.removeSelectedFiles(selectedFiles)
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(true);
    });

    it('should return Observable of FALSE if file is not found', () => {
      const selectedFiles: string[] = [files[2].id.toString()];
      selectedFiles[0] = '11242314';
      service.loadFiles('');

      service.removeSelectedFiles(selectedFiles)
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(false);
    });
  });
});
