import {IOuterFile} from '../filesList/interface/IOuterFile';
import {FileManagerActionsService, IFileManagerAction} from './fileManagerActions.service';

export type storeEntities = { [key: string]: IOuterFile };

export interface IFileManagerState {
  entities: storeEntities,
  files: string[],
  selectedFiles: string[]
}


function cropFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  const file = action.payload.file;
  const id = file.getId().toString();

  state.entities[id] = <IOuterFile>Object.assign({}, file.toJSON());

  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: state.selectedFiles
  }
}

function inverseFilesSelection(state: IFileManagerState): IFileManagerState {
  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: state.files.filter((i: string) => state.selectedFiles.indexOf(i) === -1)
  };
}

function loadFiles(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  const newState = {
    entities: {},
    files: [],
    selectedFiles: []
  };

  action.payload.files.map((file: IOuterFile) => {
    const id = file.id.toString();

    newState.entities[id] = file;
    newState.files.push(id);
  });


  return newState;
}


function removeFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  let id = action.payload.file.getId();

  delete state.entities[id];

  return {
    entities: state.entities,
    files: state.files.filter((i: string) => i !== id),
    selectedFiles: state.selectedFiles
  }
}

function removeSelectedFiles(state: IFileManagerState): IFileManagerState {
  const files: string[] = state.files.filter((i: string) => state.selectedFiles.indexOf(i) === -1);
  const entities: storeEntities = {};

  files.forEach((fileId: string) => {
    entities[fileId] = state.entities[fileId];
  });

  return {
    entities: entities,
    files: files,
    selectedFiles: []
  };
}

function selectFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: [...state.selectedFiles, action.payload.file.getId().toString()]
  };
}

function selectAllFiles(state: IFileManagerState): IFileManagerState {
  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: [...state.files]
  };
}

function uploadFiles(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  action.payload.files.forEach((file: IOuterFile) => {
    const id = file.id.toString();

    state.entities[id] = file;
    state.files.push(id);
  });


  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: []
  };
}


function unSelectAllFiles(state: IFileManagerState): IFileManagerState {
  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: []
  };
}

function unSelectFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  const fileId = action.payload.file.getId().toString();

  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: state.selectedFiles.filter((id: string) => id !== fileId)
  };
}

export function fileManagerReducer(state: IFileManagerState = {
  entities: {},
  files: [],
  selectedFiles: []
}, action: IFileManagerAction): IFileManagerState {
  switch (action.type) {
    case FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS:
      return cropFile(state, action);
    case FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION:
      return inverseFilesSelection(state);
    case FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS:
      return removeSelectedFiles(state);
    case FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS:
      return removeFile(state, action);
    case FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS:
      return loadFiles(state, action);
    case FileManagerActionsService.FILEMANAGER_SELECT_ALL:
      return selectAllFiles(state);
    case FileManagerActionsService.FILEMANAGER_SELECT_FILE:
      return selectFile(state, action);
    case FileManagerActionsService.FILEMANAGER_UNSELECT_ALL:
      return unSelectAllFiles(state);
    case FileManagerActionsService.FILEMANAGER_UNSELECT_FILE:
      return unSelectFile(state, action);
    case FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS:
      return uploadFiles(state, action);
    case FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION:
    case FileManagerActionsService.FILEMANAGER_CROP_FILE:
    case FileManagerActionsService.FILEMANAGER_DELETE_FILE:
    case FileManagerActionsService.FILEMANAGER_LOAD_FILES:
      return state;
    default:
      return state;
  }
}

export const getAll = (state: IFileManagerState): IOuterFile[] => {
  return state.files.map((id: string) => state.entities[id]);
}

