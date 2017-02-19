import {Component, EventEmitter, Output, Input, OnChanges, Inject} from "@angular/core";
import {FileUploader} from "ng2-file-upload";
import {IButton} from "../dropdown/IButton";
import {Button} from "./models/button.model";
import {ToolbarEventModel} from "./models/toolbarEvent.model";
import {IToolbarEvent} from "./interface/IToolbarEvent";
import {ConfirmOptions, Position} from "angular2-bootstrap-confirm";
import {Positioning} from "angular2-bootstrap-confirm/position";
import {FormControl} from "@angular/forms";
import {IFileTypeFilter} from "./interface/IFileTypeFilter";
import {FileManagerConfiguration} from "../configuration/fileManagerConfiguration.service";
import {IUrlConfiguration} from "../configuration/IUrlConfiguration";

@Component({
  selector: 'toolbar',
  styleUrls: ['./toolbar.less'],
  providers: [ConfirmOptions, {provide: Position, useClass: Positioning}],
  templateUrl: './toolbar.html'
})

export class Toolbar implements OnChanges {
  @Input() currentFolderId: string;
  @Input() numberOfSelectedItems: number;

  @Output() onAddFolderClick = new EventEmitter();
  @Output() onUpload = new EventEmitter();
  @Output() onUploadItem = new EventEmitter();
  @Output() onMenuButtonClick = new EventEmitter();
  @Output() onSearchChange = new EventEmitter();
  @Output() onFilterTypeChange = new EventEmitter();

  public uploader: FileUploader;

  public searchField = new FormControl();

  public selectedType: IFileTypeFilter = null;

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

  /**
   * List of filter types
   * @typeObserv {IFileTypeFilter[]}
   */
  public typeFilterList: IFileTypeFilter[];

  public constructor(private configuration: FileManagerConfiguration,
                     @Inject('fileManagerUrls') urls: IUrlConfiguration) {
    let options = {};
    options['removeAfterUpload'] = true;
    options['autoUpload'] = true;
    options['method'] = 'POST';

    this.typeFilterList = configuration.fileTypesFilter;

    this.uploader = new FileUploader({url: urls.filesUrl});

    this.uploader.setOptions(options);
    this.uploader.onCompleteAll = () => {
      this.onUpload.emit(this.currentFolderId || '');
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: number, headers: any) => {
      this.onUploadItem.emit({response: response, status: status, name: item.file.name});
    };

    this.searchField.valueChanges
      .debounceTime(250)
      .subscribe((value) => this.onSearchChange.emit(value));

    this.typeFilterList.forEach((type) => {
      if (type.defaultSelected) {
        this.selectedType = type;
      }
    });
  }

  public ngOnChanges() {
    let options = {
      headers: [{name: 'folderId', value: this.currentFolderId || ''}]
    };

    this.uploader.setOptions(options);
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

  public onDeleteSelection() {
    let event: IToolbarEvent = new ToolbarEventModel(Button.DELETE_SELECTION);
    this.onMenuButtonClick.emit(event);
  }

  public getRemoveMessage() {
    return 'You are try to delete <b>' + this.numberOfSelectedItems.toString() + ' file(s)</b>. Are you sure?';
  }

  /**
   * Set current filter and fire event
   * @param type
   */
  public setFilterType(type: IFileTypeFilter) {
    this.selectedType = type;
    this.onFilterTypeChange.emit(type);
  }
}
