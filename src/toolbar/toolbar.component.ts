import {Component, EventEmitter, Output, Input, OnChanges} from '@angular/core';
import {Button} from './models/button.model';
import {ToolbarEventModel} from './models/toolbarEvent.model';
import {IToolbarEvent} from './interface/IToolbarEvent';
import {FileManagerConfiguration} from '../configuration/fileManagerConfiguration.service';
import {FileManagerUploader} from '../filesList/fileManagerUploader.service';
import {FileManagerDispatcherService} from '../store/fileManagerDispatcher.service';

@Component({
  selector: 'toolbar',
  styleUrls: ['./toolbar.less'],
  templateUrl: './toolbar.html'
})

export class ToolbarComponent implements OnChanges {
  @Input() currentFolderId: string;

  @Output() onAddFolderClick = new EventEmitter();
  @Output() onUpload = new EventEmitter();
  @Output() onMenuButtonClick = new EventEmitter();


  public constructor(public configuration: FileManagerConfiguration,
                     public fileManagerUploader: FileManagerUploader,
                     private fileManagerDispatcher: FileManagerDispatcherService) {

    this.fileManagerUploader.clear();

    this.fileManagerUploader.uploader.onCompleteAll = () => {
      this.onUpload.emit(this.currentFolderId || '');
    };

    this.fileManagerUploader.uploader.onCompleteItem = (item: any, response: any, status: number, headers: any) => {
      if (status === 200) {
        this.fileManagerDispatcher.upload(JSON.parse(response));
      } else {
        this.fileManagerDispatcher.uploadError(JSON.parse(response));
      }
    };
  }

  public ngOnChanges() {
    this.fileManagerUploader.setDirectoryId(this.currentFolderId || '');
  }

  public addFolder() {
    let event: IToolbarEvent = new ToolbarEventModel(Button.ADD_FOLDER, 'Nowy folder');
    this.onAddFolderClick.emit(event);
  }

  public onRefreshFilesList() {
    let event: IToolbarEvent = new ToolbarEventModel(Button.REFRESH_FILES_LIST);
    this.onMenuButtonClick.emit(event);
  }
}
