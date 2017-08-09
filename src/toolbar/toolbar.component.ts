import {Component, EventEmitter, Output, Input, OnChanges} from "@angular/core";
import {IButton} from "../dropdown/IButton";
import {Button} from "./models/button.model";
import {ToolbarEventModel} from "./models/toolbarEvent.model";
import {IToolbarEvent} from "./interface/IToolbarEvent";
import {ConfirmOptions, Position} from "angular2-bootstrap-confirm";
import {Positioning} from "angular2-bootstrap-confirm/position";
import {FileManagerConfiguration} from "../configuration/fileManagerConfiguration.service";
import {FileManagerUploader} from "../filesList/fileManagerUploader.service";
import {FileManagerDispatcherService} from '../store/fileManagerDispatcher.service';
import {FileItem} from 'ng2-file-upload';

@Component({
  selector: 'toolbar',
  styleUrls: ['./toolbar.less'],
  providers: [ConfirmOptions, {provide: Position, useClass: Positioning}],
  templateUrl: './toolbar.html'
})

export class Toolbar implements OnChanges {
  @Input() currentFolderId: string;

  @Output() onAddFolderClick = new EventEmitter();
  @Output() onUpload = new EventEmitter();
  @Output() onMenuButtonClick = new EventEmitter();

  public selectAllButton: IButton = {
    symbol: Button.SELECT_ALL,
    name: 'Select all',
    label: false,
    icon: true,
    iconCssClass: 'fa fa-check-square-o'
  };

  public selectButtonsList: IButton[] = [
    {symbol: Button.SELECT_ALL, name: 'Select all', label: true, icon: true, iconCssClass: 'fa fa-check-square-o'},
    {symbol: Button.UNSELECT_ALL, name: 'Unselect all', label: true, icon: true, iconCssClass: 'fa fa-square-o'},
    {
      symbol: Button.INVERSE_SELECTION,
      name: 'Inverse selection',
      label: true,
      icon: true,
      iconCssClass: 'fa fa-check-square'
    }
  ];

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

  public onSelectDropdownClick(button: IButton) {
    let event: IToolbarEvent = new ToolbarEventModel(button.symbol);
    this.onMenuButtonClick.emit(event);
  }

  public onRefreshFilesList() {
    let event: IToolbarEvent = new ToolbarEventModel(Button.REFRESH_FILES_LIST);
    this.onMenuButtonClick.emit(event);
  }
}
