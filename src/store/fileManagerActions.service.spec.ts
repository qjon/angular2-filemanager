import {FileManagerActionsService, IFileManagerAction} from './fileManagerActions.service';
import {IFileModel} from '../filesList/interface/IFileModel';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {FileModel} from '../filesList/file.model';
import {ICropBounds} from '../crop/ICropBounds';

describe('fileManagerActions.service', () => {
  let service: FileManagerActionsService;
  let file: IFileModel;
  let files: IOuterFile[];
  let fileData: IOuterFile;

  beforeEach(() => {
    fileData = {
      id: '39097132-ed56-3c72-bfd7-898e1cc00299',
      folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
      name: 'avatar.jpg',
      type: 'image/jpeg',
      url: 'some base 64png',
      thumbnailUrl: 'some base 64png',
      size: 6076,
      width: 125,
      height: 125
    };

    file = new FileModel(fileData);

    files = [fileData];

    service = new FileManagerActionsService();
  });

  describe('should contains static values', () => {
    it('FILEMANAGER_CROP_FILE', () => {
      expect(FileManagerActionsService.FILEMANAGER_CROP_FILE).toBe('FILEMANAGER_CROP_FILE');
    });

    it('FILEMANAGER_CROP_FILE_SUCCESS', () => {
      expect(FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS).toBe('FILEMANAGER_CROP_FILE_SUCCESS');
    });

    it('FILEMANAGER_CROP_FILE_ERROR', () => {
      expect(FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR).toBe('FILEMANAGER_CROP_FILE_ERROR');
    });

    it('FILEMANAGER_DELETE_FILE', () => {
      expect(FileManagerActionsService.FILEMANAGER_DELETE_FILE).toBe('FILEMANAGER_DELETE_FILE');
    });

    it('FILEMANAGER_DELETE_FILE_SUCCESS', () => {
      expect(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS).toBe('FILEMANAGER_DELETE_FILE_SUCCESS');
    });

    it('FILEMANAGER_DELETE_FILE_SELECTION', () => {
      expect(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION).toBe('FILEMANAGER_DELETE_FILE_SELECTION');
    });

    it('FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS', () => {
      expect(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS).toBe('FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS');
    });

    it('FILEMANAGER_INVERSE_FILE_SELECTION', () => {
      expect(FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION).toBe('FILEMANAGER_INVERSE_FILE_SELECTION');
    });

    it('FILEMANAGER_LOAD_FILES', () => {
      expect(FileManagerActionsService.FILEMANAGER_LOAD_FILES).toBe('FILEMANAGER_LOAD_FILES');
    });

    it('FILEMANAGER_LOAD_FILES_SUCCESS', () => {
      expect(FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS).toBe('FILEMANAGER_LOAD_FILES_SUCCESS');
    });

    it('FILEMANAGER_SELECT_ALL', () => {
      expect(FileManagerActionsService.FILEMANAGER_SELECT_ALL).toBe('FILEMANAGER_SELECT_ALL');
    });

    it('FILEMANAGER_SELECT_FILE', () => {
      expect(FileManagerActionsService.FILEMANAGER_SELECT_FILE).toBe('FILEMANAGER_SELECT_FILE');
    });

    it('FILEMANAGER_UNSELECT_FILE', () => {
      expect(FileManagerActionsService.FILEMANAGER_UNSELECT_FILE).toBe('FILEMANAGER_UNSELECT_FILE');
    });

    it('FILEMANAGER_UNSELECT_ALL', () => {
      expect(FileManagerActionsService.FILEMANAGER_UNSELECT_ALL).toBe('FILEMANAGER_UNSELECT_ALL');
    });

    it('FILEMANAGER_UPLOAD_FILE', () => {
      expect(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE).toBe('FILEMANAGER_UPLOAD_FILE');
    });

    it('FILEMANAGER_UPLOAD_FILE_ERROR', () => {
      expect(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR).toBe('FILEMANAGER_UPLOAD_FILE_ERROR');
    });

    it('FILEMANAGER_UPLOAD_FILE_SUCCESS', () => {
      expect(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS).toBe('FILEMANAGER_UPLOAD_FILE_SUCCESS');
    });
  });

  describe('cropFile', () => {
    it('should return proper object', () => {
      const bounds: ICropBounds = {
        x: 0,
        y: 0,
        width: 100,
        height: 200
      };

      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_CROP_FILE,
        payload: {file, bounds}
      };

      expect(service.cropFile(file, bounds)).toEqual(expected);
    });
  });

  describe('cropFileSuccess', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS,
        payload: {file}
      };

      expect(service.cropFileSuccess(file)).toEqual(expected);
    });
  });

  describe('cropFileError', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR,
        payload: {file}
      };

      expect(service.cropFileError(file)).toEqual(expected);
    });
  });

  describe('deleteFile', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_DELETE_FILE,
        payload: {file}
      };

      expect(service.deleteFile(file)).toEqual(expected);
    });
  });

  describe('deleteFileSuccess', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS,
        payload: {file}
      };

      expect(service.deleteFileSuccess(file)).toEqual(expected);
    });
  });

  describe('deleteSelectedFiles', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
        payload: {files}
      };

      expect(service.deleteSelectedFiles(files)).toEqual(expected);
    });
  });

  describe('deleteSelectedFilesSuccess', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS,
        payload: {files}
      };

      expect(service.deleteSelectedFilesSuccess(files)).toEqual(expected);
    });
  });

  describe('loadFiles', () => {
    it('should return proper object', () => {
      const folderId = '124';
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_LOAD_FILES,
        payload: {folderId}
      };

      expect(service.loadFiles(folderId)).toEqual(expected);
    });
  });

  describe('inverseFileSelection', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION,
        payload: {}
      };

      expect(service.inverseFileSelection()).toEqual(expected);
    });
  });

  describe('loadFilesSuccess', () => {
    it('should return proper object', () => {
      const folderId = '124';
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS,
        payload: {folderId, files}
      };

      expect(service.loadFilesSuccess(folderId, files)).toEqual(expected);
    });
  });

  describe('selectAllFiles', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_SELECT_ALL,
        payload: {}
      };

      expect(service.selectAllFiles()).toEqual(expected);
    });
  });

  describe('selectFile', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_SELECT_FILE,
        payload: {file}
      };

      expect(service.selectFile(file)).toEqual(expected);
    });
  });

  describe('unSelectAll', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_UNSELECT_ALL,
        payload: {}
      };

      expect(service.unSelectAll()).toEqual(expected);
    });
  });

  describe('unSelectFile', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_UNSELECT_FILE,
        payload: {file}
      };

      expect(service.unSelectFile(file)).toEqual(expected);
    });
  });

  describe('uploadSuccess', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS,
        payload: {
          files: [fileData]
        }
      };

      expect(service.uploadSuccess(fileData)).toEqual(expected);
    });
  });

  describe('uploadError', () => {
    it('should return proper object', () => {
      const expected: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR,
        payload: {
          files: [fileData]
        }
      };

      expect(service.uploadError(fileData)).toEqual(expected);
    });
  });
});
