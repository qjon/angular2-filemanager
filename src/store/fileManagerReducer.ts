import {IOuterFile} from '../filesList/interface/IOuterFile';
import {FileManagerActionsService, IFileManagerAction} from './fileManagerActions.service';
import {State} from '@ngrx/store';
import {IFileModel} from '../filesList/interface/IFileModel';
import {FileModel} from '../filesList/file.model';

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

function inverseFilesSelection(state: IFileManagerState): IFileManagerState {
  return [...state.map((file: IOuterFile) => {
    const newFile = copyOuterFile(file);

    newFile.selected = !file.selected;

    return newFile;
  })];
}

function loadFiles(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  return [...action.payload.files];
}

function removeFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  let id = action.payload.file.getId();

  return [...state.filter((file: IOuterFile) => file.id !== id)]
}

function removeSelectedFiles(state: IFileManagerState): IFileManagerState {
  return [...state.filter((file: IOuterFile) => !file.selected)]
}

function selectFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  return state.map((file: IOuterFile) => {
    if (file.id === action.payload.file.getId()) {
      const newFile = copyOuterFile(file);

      newFile.selected = true;

      return newFile;
    }

    return file;
  });
}

function selectAllFiles(state: IFileManagerState): IFileManagerState {
  return state.map((file: IOuterFile) => {
    const newFile = copyOuterFile(file);

    newFile.selected = true;

    return newFile;
  });
}

function uploadFiles(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  return [...state, ...action.payload.files];
}

function unSelectAllFiles(state: IFileManagerState): IFileManagerState {
  return state.map((file: IOuterFile) => {
    const newFile = copyOuterFile(file);

    newFile.selected = false;

    return newFile;
  });
}

function unSelectFile(state: IFileManagerState, action: IFileManagerAction): IFileManagerState {
  return state.map((file: IOuterFile) => {
    if (file.id === action.payload.file.getId()) {
      const newFile = copyOuterFile(file);

      newFile.selected = false;

      return newFile;
    }

    return file;
  });
}


function getFileById(state: IFileManagerState, id: string | number): IOuterFile {
  const files = state.filter((file: IOuterFile) => file.id === id);

  return files.length > 0 ? files[0] : null;
}


function copyOuterFile(inputFile: IOuterFile): IOuterFile {
  let {id, folderId, name,  thumbnailUrl,  url,  width,  height,  type,  data, size,  selected} = inputFile;

  return <IOuterFile>{id, folderId, name,  thumbnailUrl,  url,  width,  height,  type,  data, size,  selected};
}


export function fileManagerReducer(state: IFileManagerState = [], action: IFileManagerAction): IFileManagerState {
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

