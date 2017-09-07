import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {IFileModel} from '../filesList/interface/IFileModel';
import {ICropBounds} from '../crop/ICropBounds';

export interface IFileManagerPayloadData {
  folderId?: string;
  files?: IOuterFile[];
  file?: IFileModel;
  bounds?: ICropBounds;
}

export interface IFileManagerAction extends Action {
  payload: IFileManagerPayloadData;
}

@Injectable()
export class FileManagerActionsService {
  static FILEMANAGER_CROP_FILE = 'FILEMANAGER_CROP_FILE';
  static FILEMANAGER_CROP_FILE_SUCCESS = 'FILEMANAGER_CROP_FILE_SUCCESS';
  static FILEMANAGER_CROP_FILE_ERROR = 'FILEMANAGER_CROP_FILE_ERROR';
  static FILEMANAGER_DELETE_FILE = 'FILEMANAGER_DELETE_FILE';
  static FILEMANAGER_DELETE_FILE_SUCCESS = 'FILEMANAGER_DELETE_FILE_SUCCESS';
  static FILEMANAGER_DELETE_FILE_SELECTION = 'FILEMANAGER_DELETE_FILE_SELECTION';
  static FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS = 'FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS';
  static FILEMANAGER_INVERSE_FILE_SELECTION = 'FILEMANAGER_INVERSE_FILE_SELECTION';
  static FILEMANAGER_LOAD_FILES = 'FILEMANAGER_LOAD_FILES';
  static FILEMANAGER_LOAD_FILES_SUCCESS = 'FILEMANAGER_LOAD_FILES_SUCCESS';
  static FILEMANAGER_SELECT_ALL = 'FILEMANAGER_SELECT_ALL';
  static FILEMANAGER_SELECT_FILE = 'FILEMANAGER_SELECT_FILE';
  static FILEMANAGER_UNSELECT_FILE = 'FILEMANAGER_UNSELECT_FILE';
  static FILEMANAGER_UNSELECT_ALL = 'FILEMANAGER_UNSELECT_ALL';
  static FILEMANAGER_UPLOAD_FILE = 'FILEMANAGER_UPLOAD_FILE';
  static FILEMANAGER_UPLOAD_FILE_ERROR = 'FILEMANAGER_UPLOAD_FILE_ERROR';
  static FILEMANAGER_UPLOAD_FILE_SUCCESS = 'FILEMANAGER_UPLOAD_FILE_SUCCESS';

  public cropFile(file: IFileModel, bounds: ICropBounds): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_CROP_FILE,
      payload: {
        file: file,
        bounds: bounds
      }
    }
  }

  public cropFileSuccess(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS,
      payload: {
        file: file
      }
    }
  }

  public cropFileError(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR,
      payload: {
        file: file
      }
    }
  }

  public deleteFile(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_DELETE_FILE,
      payload: {
        file: file
      }
    }
  }

  public deleteFileSuccess(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS,
      payload: {
        file: file
      }
    }
  }

  public deleteSelectedFiles(): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
      payload: {}
    }
  }

  public deleteSelectedFilesSuccess(files: IOuterFile[]): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
      payload: {files}
    }
  }

  public loadFiles(folderId: string): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_LOAD_FILES,
      payload: {
        folderId: folderId
      }
    }
  }

  public inverseFileSelection(): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION,
      payload: {}
    }
  }

  public loadFilesSuccess(folderId: string, files: IOuterFile[]): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS,
      payload: {
        folderId: folderId,
        files: files
      }
    }
  }

  public selectAllFiles(): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_SELECT_ALL,
      payload: {}
    }
  }

  public selectFile(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_SELECT_FILE,
      payload: {
        file: file
      }
    }
  }

  public unSelectAll(): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UNSELECT_ALL,
      payload: {}
    }
  }

  public unSelectFile(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UNSELECT_FILE,
      payload: {
        file: file
      }
    }
  }

  public upload(file: IOuterFile): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE,
      payload: {
        files: [file]
      }
    }
  }

  public uploadSuccess(file: IOuterFile): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS,
      payload: {
        files: [file]
      }
    }
  }

  public uploadError(file: IOuterFile): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR,
      payload: {
        files: [file]
      }
    }
  }
}
