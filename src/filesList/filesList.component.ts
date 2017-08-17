import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FileModel} from './file.model';
import {IFileEvent} from './interface/IFileEvent';
import {IFileModel} from './interface/IFileModel';
import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';
import {FileManagerConfiguration} from '../configuration/fileManagerConfiguration.service';
import {IFileManagerAction} from '../store/fileManagerActions.service';
import {FileManagerDispatcherService} from '../store/fileManagerDispatcher.service';
import {NotificationsService} from 'angular2-notifications';
import {FileManagerEffectsService} from '../store/fileManagerEffects.service';

@Component({
  selector: 'ri-files-list',
  templateUrl: './files.html',
  providers: [ConfirmOptions, {provide: Position, useClass: Positioning}],
  styleUrls: ['./files-list.less']
})

export class FilesListComponent {
  @Input() files: FileModel[];

  @Output() onPreviewFile = new EventEmitter();
  @Output() onCropFile = new EventEmitter();
  @Output() onSelectFile = new EventEmitter();

  public removeTitle = 'Remove file';

  public constructor(public configuration: FileManagerConfiguration,
                     private fileManagerDispatcher: FileManagerDispatcherService,
                     notifications: NotificationsService,
                     fileManagerEffects: FileManagerEffectsService) {

    fileManagerEffects.deleteFileSuccess$
      .subscribe((action: IFileManagerAction) => {
        notifications.success('File delete', `${action.payload.file.name} has been deleted`);
      });
  }

  /**
   * Fired when clicked on button "delete file"
   *
   * @param file
   */
  public deleteFile(file: IFileModel) {
    this.fileManagerDispatcher.deleteFile(file);
  }

  public getRemoveMessage(file: IFileModel) {
    return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
  }

  /**
   * Select or unselect all files
   *
   * @param selected
   */
  public allFilesSelection(selected = true) {
    this.files.map((file) => file.selected = selected);
  }

  /**
   * Select inversion
   */
  public selectInversion() {
    this.files.map((file) => file.selected = !file.selected);
  }

  public openPreview(file: FileModel): void {
    let fileEvent: IFileEvent = {
      eventName: 'onPreviewFile',
      file: file
    };
    this.onPreviewFile.emit(fileEvent);
  }

  public openCrop(file: FileModel): void {
    let fileEvent: IFileEvent = {
      eventName: 'onCropFile',
      file: file
    };
    this.onCropFile.emit(fileEvent);
  }

  public toggleSelection(file: IFileModel): void {
    if (file.selected) {
      this.fileManagerDispatcher.unSelectFile(file);
    } else {
      this.fileManagerDispatcher.selectFile(file);
    }
  }
}
