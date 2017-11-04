import {Component, EventEmitter, Input, OnChanges, Output, ViewEncapsulation} from '@angular/core';
import {IFileModel} from '../interface/IFileModel';
import {FileManagerConfiguration} from '../../configuration/fileManagerConfiguration.service';
import {IFileEvent} from '../interface/IFileEvent';
import {FileManagerDispatcherService} from '../../store/fileManagerDispatcher.service';

@Component({
  selector: 'ri-file-component',
  templateUrl: './file.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FileComponent implements OnChanges {
  @Input() file: IFileModel;

  @Output() onPreviewFile = new EventEmitter();
  @Output() onCropFile = new EventEmitter();
  @Output() onSelectFile = new EventEmitter();

  public constructor(public configuration: FileManagerConfiguration,
                     private fileManagerDispatcher: FileManagerDispatcherService) {
  }

  public ngOnChanges() {
    console.log('change', this.file);
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

  public openPreview(): void {
    let fileEvent: IFileEvent = {
      eventName: 'onPreviewFile',
      file: this.file
    };
    this.onPreviewFile.emit(fileEvent);
  }

  public openCrop(): void {
    let fileEvent: IFileEvent = {
      eventName: 'onCropFile',
      file: this.file
    };
    this.onCropFile.emit(fileEvent);
  }

  public selectFile(): void {
    this.fileManagerDispatcher.selectFile(this.file);
  }

  public unSelectFile(): void {
    this.fileManagerDispatcher.unSelectFile(this.file);
  }
}
