import {Http, Response, ResponseOptions, URLSearchParams} from '@angular/http';
import {FileManagerConfiguration} from '../configuration/fileManagerConfiguration.service';
import {FileManagerBackendApiService} from './fileManagerBackendApi.service';
import {rootNode} from '../../_unitTestMocks/folderDataMock';
import {Observable} from 'rxjs/Observable';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {filesData} from '../../_unitTestMocks/fileDataMock';
import {IOuterNode} from '@rign/angular2-tree';
import {Subscription} from 'rxjs/Subscription';
import {ICropBounds} from '../crop/ICropBounds';
import {HttpClient, HttpParams} from '@angular/common/http';

describe('fileManagerBackendApi.service', () => {
  let service: FileManagerBackendApiService;
  let configuration: FileManagerConfiguration;
  let handler: any;
  let httpMock: Http | any;
  let files: IOuterFile[];
  let subscription: Subscription;

  beforeEach(() => {
    handler = jasmine.createSpy('handler');

    files = filesData.map(x => Object.assign({}, x));

    configuration = <FileManagerConfiguration>{
      folderUrls: {
        foldersUrl: '/folders'
      },
      fileUrl: '/files'
    };
    httpMock = <HttpClient>jasmine.createSpyObj('Http', ['delete', 'get', 'post', 'put']);

    service = new FileManagerBackendApiService(httpMock, configuration);
  });

  afterEach(() => {
    subscription.unsubscribe();
  });

  describe('load', () => {
    it('should load all nodes from given node', function () {
      httpMock.get.and.returnValue(Observable.of([rootNode]));

      subscription = service.load('')
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith([rootNode]);
    });
  });

  describe('add', () => {
    let nodeId: string;
    let newNode: IOuterNode;
    let createdNode: IOuterNode;

    beforeEach(() => {
      nodeId = '12345678-1234-1234-1234-123456789012';

      newNode = {
        id: null,
        name: 'new node',
        children: []
      };

      createdNode = <IOuterNode>Object.assign({}, newNode);
      createdNode.id = 'some-id';
      createdNode.parentId = nodeId;

      httpMock.post.and.returnValue(Observable.of(createdNode));

      subscription = service.add(newNode, nodeId)
        .subscribe(handler);
    });

    afterEach(() => {
      expect(httpMock.post.calls.count()).toBe(1);
    });

    it('should create proper $httpMock request', () => {
      expect(httpMock.post).toHaveBeenCalledWith(configuration.folderUrls.foldersUrl, {
        node: newNode,
        parentNodeId: nodeId
      });
    });

    it('should call handler with new created node', () => {
      expect(handler).toHaveBeenCalledWith(createdNode);
    });
  });

  describe('move', () => {
    let srcNode: IOuterNode;
    let targetNode: IOuterNode;
    let movedNode: IOuterNode;
    let subscriptionTwo: Subscription;

    beforeEach(() => {
      srcNode = {
        id: '12345678-1234-1234-1234-123456789012',
        parentId: null,
        name: 'source node',
        children: []
      };

      targetNode = {
        id: '12345678-1234-1234-1234-098765432112',
        parentId: '11111111-1111-1111-1111-111111111111',
        name: 'target node',
        children: []
      };

      movedNode = <IOuterNode>Object.assign({}, srcNode);
      movedNode.parentId = '12345678-1234-1234-1234-098765432112';

      httpMock.get.and.returnValue(Observable.of([srcNode]));
      httpMock.put.and.returnValue(Observable.of(movedNode));

      subscription = service.load('')
        .subscribe(() => {
        });

      subscriptionTwo = service.move(srcNode, targetNode)
        .subscribe(handler);
    });

    afterEach(() => {
      expect(httpMock.put.calls.count()).toBe(1);

      subscriptionTwo.unsubscribe();
    });

    it('should create proper $http request', () => {
      expect(httpMock.put).toHaveBeenCalledWith(configuration.folderUrls.folderMoveUrl, {
        source: srcNode.id,
        target: targetNode.id
      });
    });

    it('should call handler with new created node', () => {
      expect(handler).toHaveBeenCalledWith(movedNode);
    });
  });

  describe('update', () => {
    let node: IOuterNode;
    let updatedNode: IOuterNode;

    beforeEach(() => {
      node = {
        id: '12345678-1234-1234-1234-123456789012',
        parentId: null,
        name: 'source node',
        children: []
      };

      updatedNode = {
        id: '12345678-1234-1234-1234-123456789012',
        parentId: null,
        name: 'updated node',
        children: []
      }

      httpMock.get.and.returnValue(Observable.of([node]));
      httpMock.put.and.returnValue(Observable.of(updatedNode));

      service.load('');

      subscription = service.update(node)
        .subscribe(handler);
    });

    it('should create proper $http request', () => {
      expect(httpMock.put).toHaveBeenCalledWith(configuration.folderUrls.foldersUrl, node);
    });

    it('should return new value of updated node', () => {
      expect(handler).toHaveBeenCalledWith(updatedNode);
    });
  });

  describe('remove', () => {
    let node: IOuterNode;
    let removedNode: IOuterNode;
    let subscriptionTwo: Subscription;
    let params: HttpParams;

    beforeEach(() => {
      node = {
        id: '12345678-1234-1234-1234-123456789012',
        parentId: null,
        name: 'source node',
        children: []
      };

      params = new HttpParams().set('nodeId', node.id);

      removedNode = {
        id: null,
        parentId: null,
        name: 'source node',
        children: []
      };

      httpMock.get.and.returnValue(Observable.of([node]));
      httpMock.delete.and.returnValue(Observable.of(removedNode));

      subscriptionTwo = service.load('')
        .subscribe(() => {
        });
      subscription = service.remove(node.id)
        .subscribe(handler);
    });

    afterEach(() => {
      subscriptionTwo.unsubscribe();
    });

    it('should create proper $http request', () => {
      expect(httpMock.delete).toHaveBeenCalledWith(configuration.folderUrls.foldersUrl, {params});
    });

    it('should return new value of updated node', () => {
      expect(handler).toHaveBeenCalledWith(removedNode);
    });
  });

  describe('cropFile', () => {
    let file: IOuterFile;
    let bounds: ICropBounds;

    beforeEach(() => {
      file = files[0];

      bounds = {
        width: 100,
        height: 50,
        x: 0,
        y: 0
      };

      httpMock.put.and.returnValue(Observable.of(file));

      subscription = service.cropFile(file, bounds)
        .subscribe(handler);
    });

    it('should make proper $http request', () => {
      expect(httpMock.put).toHaveBeenCalledWith(configuration.fileUrl, {id: file.id, bounds: bounds});
    });

    it('should return proper value', () => {
      expect(handler).toHaveBeenCalledWith(file);
    });
  });


  describe('loadFiles', () => {
    let params: HttpParams;
    let nodeId: string;

    beforeEach(() => {
      params = new HttpParams().set('dirId', nodeId);

      nodeId = '';

      httpMock.get.and.returnValue(Observable.of(files));

      subscription = service.loadFiles(nodeId)
        .subscribe(handler);
    });

    it('should load files', () => {
      expect(handler).toHaveBeenCalledWith(files);
    });

    it('should httpMock.get call with proper params', () => {
      expect(httpMock.get).toHaveBeenCalledWith(configuration.fileUrl, {params});
    });
  });

  describe('removeSelectedFiles', () => {
    let ids: string;
    let params: HttpParams;
    let selectedFiles: string[];

    beforeEach(() => {
      selectedFiles = [files[1].id.toString(), files[2].id.toString()];
      ids = files[1].id + '|' + files[2].id;
      params = new HttpParams().set('id', ids);

      httpMock.get.and.returnValue(Observable.of(files));
      httpMock.delete.and.returnValue(Observable.of([]));

      service.loadFiles('');

      subscription = service.removeSelectedFiles(selectedFiles)
        .subscribe(handler);
    });

    it('should return Observable of TRUE', () => {
      expect(handler).toHaveBeenCalledWith(true);
    });

    it('should httpMock.delete has to be called with proper params', () => {
      expect(httpMock.delete).toHaveBeenCalledWith(configuration.fileUrl, {params});
    });
  });

  describe('uploadFile', () => {
    it('should return observable of file', () => {
      service.uploadFile(files[0])
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(files[0]);
    });

  });

});
