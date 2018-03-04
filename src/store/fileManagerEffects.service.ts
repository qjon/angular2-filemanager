import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {ITreeAction, IOuterNode, TreeActionsService} from '@rign/angular2-tree';
import {FileManagerActionsService, IFileManagerAction} from './fileManagerActions.service';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {Observable} from 'rxjs/Observable';
import {IFileModel} from '../filesList/interface/IFileModel';
import {ICropBounds} from '../crop/ICropBounds';
import {FileManagerApiService} from './fileManagerApi.service';
import {FilemanagerNotifcations} from '../services/FilemanagerNotifcations';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';

@Injectable()
export class FileManagerEffectsService {

  @Effect()
  public loadFiles$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_LOAD_FILES)
    .pipe(
      switchMap((action: IFileManagerAction) => this.loadFiles(action.payload.folderId)
        .pipe(
          map((files: IOuterFile[]): IFileManagerAction => {
            return this.fileManagerActions.loadFilesSuccess(action.payload.folderId, files);
          }),
          catchError((e) => {
            return Observable.of(this.onLoadFilesError(action.payload.folderId));
          })
        )
      )
    );

  @Effect()
  public cropFile$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE)
    .pipe(
      switchMap((action: IFileManagerAction) => this.cropFile(action.payload.file, action.payload.bounds)
        .pipe(
          map((result: IOuterFile): IFileManagerAction => {
            this.filemanagerNotfication.sendNotification({
              type: 'success',
              title: 'Crop Image.',
              message: 'Image has been cropped.'
            });
            return this.fileManagerActions.cropFileSuccess(action.payload.file);
          }),
          catchError(() => Observable.of(this.fileManagerActions.cropFileError(action.payload.file)))
        )
      )
    );

  @Effect()
  public deleteFile$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE)
    .pipe(
      switchMap((action: IFileManagerAction) => this.deleteFile(action.payload.file)
        .pipe(
          map((result: boolean): IFileManagerAction => {
            return this.fileManagerActions.deleteFileSuccess(action.payload.file);
          }),
          catchError(() => Observable.of(this.onDeleteFileError(action.payload.file)))
        )
      )
    );

  @Effect()
  public deleteFilesSelection$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION)
    .pipe(
      switchMap((action: IFileManagerAction) => this.deleteFilesSelection(action.payload.fileIds)
        .pipe(
          map((result: boolean): IFileManagerAction => {
            return this.fileManagerActions.deleteSelectedFilesSuccess(action.payload.files);
          }),
          catchError(() => Observable.of(this.onDeleteFilesSelectionError(action.payload.files)))
        )
      )
    );


  @Effect()
  public uploadFile$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE)
    .pipe(
      switchMap((action: IFileManagerAction) => this.uploadFile(action.payload.files[0])
        .pipe(
          map((result: IOuterFile): IFileManagerAction => {
            return this.fileManagerActions.uploadSuccess(result);
          }),
          catchError(() => {
            return Observable.empty();
          })
        )
      )
    );

  @Effect()
  public moveFile$ = this.actions$
    .ofType(TreeActionsService.TREE_MOVE_NODE)
    .pipe(
      filter((action: ITreeAction) => {
        return action.payload.sourceOfDroppedData === 'FILE';
      }),
      switchMap((action: ITreeAction) => this.moveFiles([<IOuterFile>action.payload.oldNode], action.payload.node)
        .pipe(
          map((result: IOuterFile[]): IFileManagerAction => {
            const folderId = (<IOuterFile>action.payload.oldNode).folderId;
            return this.fileManagerActions.moveFileSuccess(result, folderId);
          }),
          catchError(() => {
            return Observable.of(this.fileManagerActions.moveFileError([<IOuterFile>action.payload.oldNode]));
          })
        )
      )
    );

  @Effect()
  public filesMoveSuccess$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS)
    .pipe(
      map((action: IFileManagerAction) => {
        this.onMoveFilesSuccess();

        return this.fileManagerActions.loadFiles(action.payload.folderId);
      })
    );

  public uploadError$ = this.actions$
    .ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR)
    .pipe(
      map((action: IFileManagerAction) => {
        this.filemanagerNotfication.sendNotification({
          type: 'alert',
          title: 'File upload',
          message: `${action.payload.file.name} exists on the server in this directory`
        });
      })
    );

  public cropFileSuccess$: Actions;
  public deleteFileSuccess$: Actions;

  constructor(private actions$: Actions,
              private fileManagerActions: FileManagerActionsService,
              private filemanagerNotfication: FilemanagerNotifcations,
              private fileManagerApiService: FileManagerApiService) {

    this.cropFileSuccess$ = this.actions$
      .ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS);

    this.deleteFileSuccess$ = this.actions$
      .ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS);

    this.actions$
      .ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR)
      .subscribe((action: IFileManagerAction) => {
        this.onCropFileError(action.payload.file);
      });

    this.actions$
      .ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR)
      .subscribe((action: IFileManagerAction) => {
        this.onMoveFilesError();
      });
  }

  protected cropFile(file: IFileModel, bounds: ICropBounds): Observable<IOuterFile> {
    return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
  }

  protected deleteFile(file: IFileModel): Observable<boolean> {
    return this.fileManagerApiService.removeFile(file.toJSON());
  }

  protected deleteFilesSelection(files: string[]): Observable<boolean> {
    return this.fileManagerApiService.removeSelectedFiles(files);
  }

  protected loadFiles(folderId: string | null): Observable<IOuterFile[]> {
    return this.fileManagerApiService.loadFiles(folderId);
  }

  protected uploadFile(file: IOuterFile): Observable<IOuterFile> {
    return this.fileManagerApiService.uploadFile(file);
  }

  protected moveFiles(files: IOuterFile[], folder: IOuterNode = null): Observable<IOuterFile[]> {
    return this.fileManagerApiService.moveFile(files, folder);
  }

  protected onCropFileError(file: IFileModel): void {
    this.filemanagerNotfication.sendNotification({
      type: 'alert',
      title: 'Crop Image',
      message: '[FILEMANAGER] Can not crop file'
    });
  }

  protected onDeleteFileError(file: IFileModel): void {
    this.filemanagerNotfication.sendNotification({
      type: 'error',
      title: 'Delete file',
      message: '[FILEMANAGER] Can not delete file' + file.name
    });
  }

  protected onDeleteFilesSelectionError(files: IOuterFile[]): void {
    this.filemanagerNotfication.sendNotification({
      type: 'error',
      title: 'Delete selected files',
      message: '[FILEMANAGER] Not all files were deleted'
    });
  }

  protected onLoadFilesError(folderId: string): void {
    this.filemanagerNotfication.sendNotification({
      type: 'error',
      title: 'Load files',
      message: '[FILEMANAGER] Can not load files for folder ' + folderId
    });
  }

  protected onMoveFilesSuccess(): void {
    this.filemanagerNotfication.sendNotification({
      type: 'success',
      title: 'Move files',
      message: 'File was successfully moved to folder'
    });
  }

  protected onMoveFilesError(): void {
    this.filemanagerNotfication.sendNotification({
      type: 'error',
      title: 'Move files',
      message: 'File was not successfully moved to new folder'
    });
  }
}
