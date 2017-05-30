import {IOuterFile} from '../filesList/interface/IOuterFile';
import {FileManagerActionsService, IFileManagerAction} from './fileManagerActions.service';

export interface IFileManagerState extends Array<IOuterFile> {
}


function cropFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  let newState = [...state];

  for (let i in state) {
    if (newState[i].id === action.payload.file.getId()) {
      newState[i] = action.payload.file.toJSON();
    }
  }
  return newState;
}

function loadFiles(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  return [...action.payload.files];
}

function removeFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  let id = action.payload.file.getId();

  return [...state.filter((file: IOuterFile) => file.id !== id)]
}

function uploadFiles(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  return [...state, ...action.payload.files];
}

export function fileManagerReducer(state: IFileManagerState = [], action: IFileManagerAction): IFileManagerState {
  switch (action.type) {
    case FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS:
      return cropFile(state, action);
    case FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS:
      return removeFile(state, action);
    case FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS:
      return loadFiles(state, action);
    case FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS:
      return uploadFiles(state, action);
    case FileManagerActionsService.FILEMANAGER_CROP_FILE:
    case FileManagerActionsService.FILEMANAGER_DELETE_FILE:
    case FileManagerActionsService.FILEMANAGER_LOAD_FILES:
      return state;
    default:
      return state;
  }

}
