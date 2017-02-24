import {Component, Input, Output, EventEmitter} from "@angular/core";
import {FileModel} from "./file.model";
import {IFileEvent} from "./interface/IFileEvent";
import {IFileModel} from "./interface/IFileModel";
import {ConfirmOptions, Position} from "angular2-bootstrap-confirm";
import {Positioning} from "angular2-bootstrap-confirm/position";
import {FileManagerConfiguration} from "../configuration/fileManagerConfiguration.service";

@Component({
  selector: 'files-list',
  templateUrl: './files.html',
  providers: [ConfirmOptions, {provide: Position, useClass: Positioning}],
  styleUrls: ['./files-list.less']
})

export class FilesList {
  @Input() files: FileModel[];

  @Output() onRenameFile = new EventEmitter();
  @Output() onDeleteFile = new EventEmitter();
  @Output() onPreviewFile = new EventEmitter();
  @Output() onCropFile = new EventEmitter();
  @Output() onSelectFile = new EventEmitter();

  public removeTitle: string = 'Remove file';

  public constructor(public configuration: FileManagerConfiguration) {
  }

  /**
   * Fired when clicked on button "delete file"
   *
   * @param file
   */
  public deleteFile(file: IFileModel) {
    this.onDeleteFile.emit({
      name: 'onDeleteFile',
      file: file
    });
  }

  public getRemoveMessage(file: IFileModel) {
    return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
  }

  /**
   * Fired when clicked on button "rename file name"
   *
   * @param file
   */
  public renameFile(file: IFileModel) {
    let fileEvent: IFileEvent = {
      eventName: 'onRenameFile',
      file: file
    };

    this.onRenameFile.emit(fileEvent);
  }

  /**
   * Select or unselect all files
   *
   * @param selected
   */
  public allFilesSelection(selected: boolean = true) {
    this.files.map((file) => file.selected = selected);
  }

  /**
   * Select inversion
   */
  public selectInversion() {
    this.files.map((file) => file.selected = !file.selected);
  }

  public openPreview(file: FileModel) {
    let fileEvent: IFileEvent = {
      eventName: 'onPreviewFile',
      file: file
    };
    this.onPreviewFile.emit(fileEvent);
  }

  public openCrop(file: FileModel) {
    let fileEvent: IFileEvent = {
      eventName: 'onCropFile',
      file: file
    };
    this.onCropFile.emit(fileEvent);
  }

  public clickImage(file: FileModel) {
    this.onSelectFile.next(file);
  }
}
