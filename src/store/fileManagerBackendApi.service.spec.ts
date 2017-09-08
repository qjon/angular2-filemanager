import {Http, Response, ResponseOptions, URLSearchParams} from '@angular/http';
import {FileManagerConfiguration} from '../configuration/fileManagerConfiguration.service';
import {FileManagerBackendApiService} from './fileManagerBackendApi.service';
import {rootNode} from '../../_unitTestMocks/folderDataMock';
import {Observable} from 'rxjs/Observable';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {filesData} from '../../_unitTestMocks/fileDataMock';

describe('fileManagerBackendApi.service', () => {
  let service: FileManagerBackendApiService;
  let configuration: FileManagerConfiguration;
  let handler: any;
  let http: Http | any;
  let files: IOuterFile[];

  beforeEach(() => {
    handler = jasmine.createSpy('handler');

    files = filesData.map(x => Object.assign({}, x));

    configuration = <FileManagerConfiguration>{
      folderUrls: {
        foldersUrl: '/folders'
      },
      fileUrl: '/files'
    };
    http = <Http>jasmine.createSpyObj('Http', ['get', 'delete']);

    service = new FileManagerBackendApiService(http, configuration);
  });

  describe('load', () => {
    it('should load all nodes from given node', function () {
      http.get.and.returnValue(Observable.of(new Response(new ResponseOptions({body: JSON.stringify([rootNode])}))));

      service.load('')
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith([rootNode]);
    });
  });

  describe('loadFiles', () => {
    let searchParams: URLSearchParams;
    let nodeId: string;

    beforeEach(() => {
      searchParams = new URLSearchParams();
      searchParams.set('dirId', nodeId);

      nodeId = '';

      http.get.and.returnValue(Observable.of(new Response(new ResponseOptions({body: JSON.stringify(files)}))));

      service.loadFiles(nodeId)
        .subscribe(handler);
    });

    it('should load files', () => {
      expect(handler).toHaveBeenCalledWith(files);
    });

    it('should http.get call with proper params', () => {
      expect(http.get).toHaveBeenCalledWith(configuration.fileUrl, {search: searchParams});
    });
  });

  describe('removeSelectedFiles', () => {
    let ids: string;
    let searchParams: URLSearchParams;
    let selectedFiles: IOuterFile[];

    beforeEach(() => {
      selectedFiles = [files[1], files[2]];
      ids = files[1].id + '|' + files[2].id;
      searchParams = new URLSearchParams();
      searchParams.set('id', ids);

      http.get.and.returnValue(Observable.of(new Response(new ResponseOptions({body: JSON.stringify(files)}))));
      http.delete.and.returnValue(Observable.of(new Response(new ResponseOptions({body: JSON.stringify([])}))));

      service.loadFiles('');

      service.removeSelectedFiles(selectedFiles)
        .subscribe(handler);
    });

    it('should return Observable of TRUE', () => {
      expect(handler).toHaveBeenCalledWith(true);
    });

    it('should http.delete has to be called with proper params', () => {
      expect(http.delete).toHaveBeenCalledWith(configuration.fileUrl, {search: searchParams});
    });
  });
});
