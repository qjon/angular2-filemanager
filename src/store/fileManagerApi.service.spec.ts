import {FilemanagerNotifcations} from '../services/FilemanagerNotifcations';
import {FileManagerApiService} from './fileManagerApi.service';
import {IOuterNode} from '@rign/angular2-tree';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {filesData} from '../../_unitTestMocks/fileDataMock';

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
  let files: IOuterFile[];

  beforeEach(() => {
    files = filesData.map(x => Object.assign({}, x));

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
