import {IOuterNode} from '@rign/angular2-tree';
import {Http, Response, ResponseOptions} from '@angular/http';
import {FileManagerConfiguration} from '../configuration/fileManagerConfiguration.service';
import {FileManagerBackendApiService} from './fileManagerBackendApi.service';
import {rootNode} from '../_unitTestMocks/folderDataMock';
import {Observable} from 'rxjs/Observable';

fdescribe('fileManagerApi.service', () => {
  let service: FileManagerBackendApiService;
  let configuration: FileManagerConfiguration;
  let nodesData: IOuterNode[] = [rootNode];
  let handler: any;
  let http: Http | any;

  beforeEach(() => {
    localStorage.setItem('fileManagerTree', JSON.stringify(nodesData));

    handler = jasmine.createSpy('handler');

    configuration = <FileManagerConfiguration>{
      folderUrls: {
        foldersUrl: '/files'
      }
    };
    http = <Http>jasmine.createSpyObj('Http', ['get']);

    service = new FileManagerBackendApiService(http, configuration);
  });

  afterEach(() => {
    localStorage.removeItem('fileManagerTree');
  });

  describe('load', () => {
    it('should load all nodes from given node', function () {
      http.get.and.returnValue(Observable.of(new Response(new ResponseOptions({body: JSON.stringify([rootNode])}))));

      service.load('')
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith([rootNode]);
    });
  });
});
