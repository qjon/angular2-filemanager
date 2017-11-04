import {fileManagerReducer, IFileManagerState} from './fileManagerReducer';
import {FileManagerActionsService, IFileManagerAction} from './fileManagerActions.service';
import {filesData} from '../../_unitTestMocks/fileDataMock';
import {FileModel} from '../filesList/file.model';

describe('fileManagerReducer', () => {
  let state: IFileManagerState;

  beforeEach(() => {
    state = {
      entities: {},
      files: [],
      selectedFiles: []
    };

    filesData.forEach((file) => {
      state.entities[file.id] = file;
      state.files.push(file.id.toString());
    });
  });

  describe('cropFile', () => {
    it('should return proper state', () => {
      const fileData = filesData[2];
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS,
        payload: {
          file: new FileModel(fileData)
        }
      };

      expect(fileManagerReducer(state, action)).toEqual(state);
    });
  });

  describe('inverseFilesSelection', () => {
    it('should return proper state', () => {
      const fileData = filesData[2];

      state.selectedFiles.push(filesData[0].id.toString());
      state.selectedFiles.push(filesData[1].id.toString());

      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION,
        payload: {}
      };

      const expectedState = Object.assign({}, state);

      expectedState.selectedFiles = [fileData.id.toString()];

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('loadFiles', () => {
    it('should return proper state', () => {
      const newFile = {
        id: 'abc.jpg',
        folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
        name: 'RK1409_7D_2544-Edit960px.jpg',
        thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
        url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
        type: 'image/jpeg',
        size: 6076,
        width: 960,
        height: 640,
        selected: true
      };


      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS,
        payload: {
          files: [newFile]
        }
      };

      const expectedState = {
        entities: {},
        files: [newFile.id.toString()],
        selectedFiles: [],
      };

      expectedState.entities[newFile.id] = newFile;

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });


  describe('moveFiles', () => {
    it('should return proper new state', () => {
      const file = filesData[2];
      const folderId = null;
      const expectedFiles = [
        {
          id: 'BANER2.png',
          folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
          name: 'BANER2.png',
          thumbnailUrl: '/uploads/BANER2.png',
          url: '/uploads/BANER2.png',
          type: 'image/png',
          size: 6076,
          width: 1100,
          height: 300
        },
        {
          id: 'RK1409_7D_2500960px.jpg',
          folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
          name: 'RK1409_7D_2500960px.jpg',
          thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
          url: '/uploads/RK1409_7D_2500960px.jpg',
          type: 'image/jpeg',
          size: 6076,
          width: 960,
          height: 640
        },
        {
          id: 'RK1409_7D_2544-Edit960px.jpg',
          folderId: '',
          name: 'RK1409_7D_2544-Edit960px.jpg',
          thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
          url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
          type: 'image/jpeg',
          size: 6076,
          width: 960,
          height: 640
        }];

      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS,
        payload: {
          files: [file],
          folderId: folderId
        }
      };

      const expectedState = {
        entities: {},
        files: [],
        selectedFiles: [...state.selectedFiles]
      };

      expectedFiles.forEach((f) => {
        expectedState.entities[f.id] = f;
        if (f.id !== file.id) {
          expectedState.files.push(f.id.toString());
        }
      });

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('removeFile', () => {
    it('should return proper state', () => {
      const expectedState: IFileManagerState = {
        entities: {
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          }
        },
        files: ['RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: []
      };

      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS,
        payload: {
          folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
          file: new FileModel({
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          })
        }
      };

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('removeSelectedFiles', () => {
    it('should return proper state', () => {
      const expectedState: IFileManagerState = {
        entities: {
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          }
        },
        files: ['RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: []
      };
      state.selectedFiles.push('BANER2.png');

      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS,
        payload: {}
      };

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('selectFile', () => {
    it('should return proper new state', () => {
      const file = new FileModel(filesData[0]);
      const folderId = 'dd9b20d8-260b-54c1-7eca-c22eae257edc';
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_SELECT_FILE,
        payload: {
          file: file,
          folderId: folderId
        }
      };

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: ['BANER2.png']
      };

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('selectAllFiles', () => {
    it('should return proper new state', () => {
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_SELECT_ALL,
        payload: {}
      };

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg']
      };

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('uploadFiles', () => {
    it('should return proper new state', () => {
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS,
        payload: {
          folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
          files: [
            {
              id: 'BANER201.png',
              folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
              name: 'BANER2.png',
              thumbnailUrl: '/uploads/BANER2.png',
              url: '/uploads/BANER2.png',
              type: 'image/png',
              size: 6076,
              width: 1100,
              height: 300
            }
          ]
        }
      };

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'BANER201.png': {
            id: 'BANER201.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg', 'BANER201.png'],
        selectedFiles: []
      };

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('unSelectAllFiles', () => {
    it('should return proper new state', () => {
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_UNSELECT_ALL,
        payload: {}
      };

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: []
      };

      state.selectedFiles = ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'];

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('unSelectFile', () => {
    it('should return proper new state', () => {
      const file = new FileModel(filesData[0]);
      const folderId = 'dd9b20d8-260b-54c1-7eca-c22eae257edc';
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_UNSELECT_FILE,
        payload: {
          file: file,
          folderId: folderId
        }
      };

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: []
      };

      state.selectedFiles.push('BANER2.png');

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('default', () => {
    let newState: IFileManagerState;

    beforeEach(() => {
      newState = Object.assign({}, state);
    });

    it('should return the same state for DELETE_FILE_SELECTION', () => {
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
        payload: {}
      };

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for FILEMANAGER_CROP_FILE', () => {
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_CROP_FILE,
        payload: {}
      };

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for FILEMANAGER_DELETE_FILE', () => {
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_DELETE_FILE,
        payload: {}
      };

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for FILEMANAGER_LOAD_FILES', () => {
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_LOAD_FILES,
        payload: {}
      };

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for FILEMANAGER_MOVE_FILES_ERROR', () => {
      const action: IFileManagerAction = {
        type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR,
        payload: {}
      };

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for ANY action', () => {
      const action: IFileManagerAction = {
        type: 'any',
        payload: {}
      };

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });
  });

});
