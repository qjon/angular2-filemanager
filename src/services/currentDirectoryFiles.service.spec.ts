import {CurrentDirectoryFilesService} from './currentDirectoryFiles.service';
import {MockStore} from '../../_unitTestMocks/storeMock';
import {FileTypeFilterService} from './fileTypeFilter.service';
import {SearchFilterService} from './searchFilter.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {filesData, filesDataModels, state} from '../../_unitTestMocks/fileDataMock';
import {Observable} from 'rxjs/Observable';
import {IFileManagerState} from '../store/fileManagerReducer';

describe('CurrentDirectoryFilesService', () => {
  let service: CurrentDirectoryFilesService;
  let storeMock: any;
  let fileTypeFilterMock: FileTypeFilterService;
  let searchFilterMock: SearchFilterService;
  let handler: any;
  let appState: IFileManagerState;

  beforeEach(() => {
    handler = jasmine.createSpy('handler');
    appState = Object.assign({}, state);

    storeMock = new MockStore([]);
    storeMock = jasmine.createSpyObj('store', ['select']);
    storeMock.select.and.returnValue(Observable.of(appState));

    fileTypeFilterMock = <FileTypeFilterService>jasmine.createSpyObj('FileTypeFilterService', ['getValue']);
    fileTypeFilterMock.filter$ = new BehaviorSubject(null);

    searchFilterMock = <SearchFilterService>jasmine.createSpyObj('SearchFilterService', ['getValue']);
    searchFilterMock.filter$ = new BehaviorSubject('');

    service = new CurrentDirectoryFilesService(storeMock, fileTypeFilterMock, searchFilterMock);
  });

  describe('$entities', () => {
    it('should return object with entities', () => {
      service.entities$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(appState.entities);
    });
  });

  describe('currentDirectoryFileIds$', () => {
    it('should return object with files ids', () => {
      service.currentDirectoryFileIds$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(appState.files);
    });
  });

  describe('selectedFiles$', () => {
    it('should return object with files ids', () => {
      service.selectedFiles$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(['RK1409_7D_2544-Edit960px.jpg']);
    });
  });

  describe('files$', () => {
    it('should listen on files and convert it to models', () => {
      service.files$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(filesDataModels);
    });
  });

  describe('filteredFiles$', () => {
    it('should return BANER2.png if search stream is set to BANNER', () => {
      const expectedValue = [filesDataModels[0]];

      searchFilterMock.filter$.next('BANER');

      service.filteredFiles$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(expectedValue);
    });

    it('should return BANER2.png if filter type stream is set to image/png', () => {
      const expectedValue = [filesDataModels[0]];

      fileTypeFilterMock.filter$.next({name: '', mimes: ['image/png'], iconCls: '', defaultSelected: false});

      service.filteredFiles$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(expectedValue);
    });
  });
});
