import {FilemanagerNotifcations} from '../services/FilemanagerNotifcations';
import {FileManagerApiService} from './fileManagerApi.service';
import {IOuterNode} from '@rign/angular2-tree';

describe('fileManagerApi.service', () => {
  let service: FileManagerApiService;
  let filemanagerNotifications: FilemanagerNotifcations;
  let rootNode: IOuterNode = {
    'id': 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
    'treeId': 'tree',
    'name': 'Nowy folder',
    'parentId': '',
    'children': [],
    'parents': []
  };
  let nodesData: IOuterNode[] = [rootNode];
  let handler: any;

  beforeEach(() => {
    localStorage.setItem('fileManagerTree', JSON.stringify(nodesData));

    handler = jasmine.createSpy('handler');
    filemanagerNotifications = <FilemanagerNotifcations>jasmine.createSpyObj('FilemanagerNotifcations', ['sendNotification']);

    service = new FileManagerApiService(filemanagerNotifications);
  });

  afterEach(() => {
    localStorage.removeItem('fileManagerTree');
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
});
