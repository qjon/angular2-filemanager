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

  public deleteSelectedFiles(files: IOuterFile[]): void {
    this.store.dispatch(this.fileManagerActions.deleteSelectedFiles(files));
  }

  public inverseSelection(): void {
    this.store.dispatch(this.fileManagerActions.inverseFileSelection());
  }

  public loadFiles(folderId: string | null): void {
    this.store.dispatch(this.fileManagerActions.loadFiles(folderId));
  }

  public selectAllFiles(): void {
    this.store.dispatch(this.fileManagerActions.selectAllFiles());
  }

  public selectFile(file: IFileModel): void {
    this.store.dispatch(this.fileManagerActions.selectFile(file));
  }

  public unSelectAllFiles(): void {
    this.store.dispatch(this.fileManagerActions.unSelectAll());
  }

  public unSelectFile(file: IFileModel): void {
    this.store.dispatch(this.fileManagerActions.unSelectFile(file));
  }

  public uploadError(file: IOuterFile) {
    this.store.dispatch(this.fileManagerActions.uploadError(file));
  }

  public upload(file: IOuterFile) {
    this.store.dispatch(this.fileManagerActions.upload(file));
  }

  public uploadSuccess(file: IOuterFile) {
    this.store.dispatch(this.fileManagerActions.uploadSuccess(file));
  }
}
