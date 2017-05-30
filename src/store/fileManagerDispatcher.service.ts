import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {IFileManagerState} from './fileManagerReducer';
import {FileManagerActionsService} from './fileManagerActions.service';
import {IFileModel} from '../filesList/interface/IFileModel';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {ICropBounds} from '../crop/ICropBounds';

@Injectable()
export class FileManagerDispatcherService {

  constructor(private store: Store<IFileManagerState>, private fileManagerActions: FileManagerActionsService) {
  }

  public cropFile(file: IFileModel, bounds: ICropBounds): void {
    this.store.dispatch(this.fileManagerActions.cropFile(file, bounds));
  }

  public deleteFile(file: IFileModel): void {
    this.store.dispatch(this.fileManagerActions.deleteFile(file));
  }

  public loadFiles(folderId: string | null): void {
    this.store.dispatch(this.fileManagerActions.loadFiles(folderId));
  }

  public uploadError(file: IOuterFile) {
    this.store.dispatch(this.fileManagerActions.uploadError(file));
  }

  public uploadSuccess(file: IOuterFile) {
    this.store.dispatch(this.fileManagerActions.uploadSuccess(file));
  }
}
