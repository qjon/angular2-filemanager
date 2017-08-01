import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {FilesService} from '../filesList/files.service';
import {FileManagerActionsService, IFileManagerAction} from './fileManagerActions.service';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {Observable} from 'rxjs/Observable';
import {IFileModel} from '../filesList/interface/IFileModel';
import {NotificationsService} from 'angular2-notifications';
import {ICropBounds} from '../crop/ICropBounds';
import {FileManagerApiService} from './fileManagerApi.service';

@Injectable()
export class FileManagerEffectsService {

  constructor(private actions$: Actions,
              private filesService: FilesService,
              private fileManagerActions: FileManagerActionsService,
              private notificationService: NotificationsService,
              private fileManagerApiService: FileManagerApiService) {
  }

  @Effect()
  public loadFiles$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_LOAD_FILES)
    .switchMap((action: IFileManagerAction) => this.loadFiles(action.payload.folderId)
      .map((files: IOuterFile[]): IFileManagerAction => {
        return this.fileManagerActions.loadFilesSuccess(action.payload.folderId, files);
      })
      .catch(() => Observable.of(this.onLoadFilesError(action.payload.folderId)))
    );

  @Effect()
  public cropFile$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE)
    .switchMap((action: IFileManagerAction) => this.cropFile(action.payload.file, action.payload.bounds)
      .map((result: IOuterFile): IFileManagerAction => {
        this.notificationService.success('Crop Image', 'Image has been cropped');
        return this.fileManagerActions.cropFileSuccess(action.payload.file);
      })
      .catch(() => Observable.of(this.fileManagerActions.cropFileError(action.payload.file)))
    );

  @Effect()
  public deleteFile$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE)
    .switchMap((action: IFileManagerAction) => this.deleteFile(action.payload.file)
      .map((result: boolean): IFileManagerAction => {
        return this.fileManagerActions.deleteFileSuccess(action.payload.file);
      })
      .catch(() => Observable.of(this.onDeleteFileError(action.payload.file)))
    );


  @Effect()
  public uploadFile$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE)
    .switchMap((action: IFileManagerAction) => this.uploadFile(action.payload.files[0])
      .map((result: IOuterFile): IFileManagerAction => {
        return this.fileManagerActions.uploadSuccess(result);
      })
    );

  public uploadError$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR)
    .map((action: IFileManagerAction) => {
      this.notificationService.alert('File upload', `${action.payload.file.name} exists on the server in this directory`);
    });

  public cropFileSuccess$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS);


  public cropFileError$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR)
    .subscribe((action: IFileManagerAction) => {
      this.onCropFileError(action.payload.file);
    });

  public deleteFileSuccess$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS);


  protected cropFile(file: IFileModel, bounds: ICropBounds): Observable<IOuterFile> {
    return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
  }

  protected deleteFile(file: IFileModel): Observable<boolean> {
    return this.fileManagerApiService.removeFile(file.toJSON());
  }

  protected loadFiles(folderId: string | null): Observable<IOuterFile[]> {
    return this.fileManagerApiService.loadFiles(folderId);
  }

  protected uploadFile(file: IOuterFile): Observable<IOuterFile> {
    return this.fileManagerApiService.uploadFile(file);
  }

  protected onCropFileError(file: IFileModel): void {
    console.warn('[FILEMANAGER] Can not crop file' + file.name);
    this.notificationService.alert('Crop Image', 'Image has not been cropped');
  }

  protected onDeleteFileError(file: IFileModel): void {
    console.warn('[FILEMANAGER] Can not delete file' + file.name);
  }

  protected onLoadFilesError(folderId: string): void {
    console.warn('[FILEMANAGER] Can not load files for folder ' + folderId);
  }
}
