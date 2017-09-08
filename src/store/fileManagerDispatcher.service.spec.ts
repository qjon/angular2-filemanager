import {FileManagerDispatcherService} from './fileManagerDispatcher.service';
import {Store} from '@ngrx/store';
import {FileManagerActionsService, IFileManagerAction} from './fileManagerActions.service';
import {IFileManagerState} from './fileManagerReducer';
import {IFileModel} from '../filesList/interface/IFileModel';
import {ICropBounds} from '../crop/ICropBounds';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {filesData, filesDataModels} from '../../_unitTestMocks/fileDataMock';
import {FileModel} from '../filesList/file.model';

describe('FileManagerDispatcherService', () => {
  let service: FileManagerDispatcherService;
  let storeMock: any;
  let fileManagerActionsMock: any;
  let file: IFileModel;
  let files: IOuterFile[];
  let bounds: ICropBounds;
  let action: IFileManagerAction;

  beforeEach(() => {
    files = filesData.map(x => Object.assign({}, x));
    file = new FileModel(files[0]);

    bounds = {
      x: 10,
      y: 20,
      width: 100,
      height: 200,
    };

    action = {
      type: 'SOME_ACTION',
      payload: {}
    };

    storeMock = <Store<IFileManagerState>>jasmine.createSpyObj('store', ['dispatch']);
    fileManagerActionsMock = jasmine.createSpyObj('FileManagerActionsService', [
      'cropFile',
      'deleteFile',
      'deleteSelectedFiles',
      'inverseFileSelection',
      'loadFiles',
      'selectAllFiles',
      'selectFile',
      'unSelectAll',
      'unSelectFile',
      'uploadError',
      'upload',
      'uploadSuccess',
    ]);

    service = new FileManagerDispatcherService(storeMock, fileManagerActionsMock);
  });

  describe('cropFile', () => {
    it('should dispatch cropFile action', () => {
      fileManagerActionsMock.cropFile.and.returnValue(action);

      service.cropFile(file, bounds);

      expect(fileManagerActionsMock.cropFile).toHaveBeenCalledWith(file, bounds);
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('deleteFile', () => {
    it('should dispatch deleteFile action', () => {
      fileManagerActionsMock.deleteFile.and.returnValue(action);

      service.deleteFile(file);

      expect(fileManagerActionsMock.deleteFile).toHaveBeenCalledWith(file);
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('deleteSelectedFiles', () => {
    it('should dispatch deleteSelectedFiles action', () => {
      fileManagerActionsMock.deleteSelectedFiles.and.returnValue(action);

      service.deleteSelectedFiles(files);

      expect(fileManagerActionsMock.deleteSelectedFiles).toHaveBeenCalledWith(files);
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('inverseSelection', () => {
    it('should dispatch inverseSelection action', () => {
      fileManagerActionsMock.inverseFileSelection.and.returnValue(action);

      service.inverseSelection();

      expect(fileManagerActionsMock.inverseFileSelection).toHaveBeenCalled();
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('loadFiles', () => {
    it('should dispatch loadFiles action', () => {
      fileManagerActionsMock.loadFiles.and.returnValue(action);

      service.loadFiles('');

      expect(fileManagerActionsMock.loadFiles).toHaveBeenCalledWith('');
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('selectAllFiles', () => {
    it('should dispatch selectAllFiles action', () => {
      fileManagerActionsMock.selectAllFiles.and.returnValue(action);

      service.selectAllFiles();

      expect(fileManagerActionsMock.selectAllFiles).toHaveBeenCalled();
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('selectFile', () => {
    it('should dispatch selectFile action', () => {
      fileManagerActionsMock.selectFile.and.returnValue(action);

      service.selectFile(file);

      expect(fileManagerActionsMock.selectFile).toHaveBeenCalledWith(file);
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('unSelectAllFiles', () => {
    it('should dispatch unSelectAllFiles action', () => {
      fileManagerActionsMock.unSelectAll.and.returnValue(action);

      service.unSelectAllFiles();

      expect(fileManagerActionsMock.unSelectAll).toHaveBeenCalled();
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('unSelectFile', () => {
    it('should dispatch unSelectFile action', () => {
      fileManagerActionsMock.unSelectFile.and.returnValue(action);

      service.unSelectFile(file);

      expect(fileManagerActionsMock.unSelectFile).toHaveBeenCalledWith(file);
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('uploadError', () => {
    it('should dispatch uploadError action', () => {
      const fileData = file.toJSON();
      fileManagerActionsMock.uploadError.and.returnValue(action);

      service.uploadError(fileData);

      expect(fileManagerActionsMock.uploadError).toHaveBeenCalledWith(fileData);
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('upload', () => {
    it('should dispatch upload action', () => {
      const fileData = file.toJSON();
      fileManagerActionsMock.upload.and.returnValue(action);

      service.upload(fileData);

      expect(fileManagerActionsMock.upload).toHaveBeenCalledWith(fileData);
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('uploadSuccess', () => {
    it('should dispatch uploadSuccess action', () => {
      const fileData = file.toJSON();
      fileManagerActionsMock.uploadSuccess.and.returnValue(action);

      service.uploadSuccess(fileData);

      expect(fileManagerActionsMock.uploadSuccess).toHaveBeenCalledWith(fileData);
      expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });
  });
});
