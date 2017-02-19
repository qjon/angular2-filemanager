import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {TreeComponent, FolderService, IContextMenu, IOuterNode, ITreeItemEvent} from '@rign/angular2-tree/main';
import {FilesService} from "./filesList/files.service";
import {IOuterFile} from "./filesList/IOuterFile";
import {FileModel} from "./filesList/file.model";
import {log} from "./decorators/logFunction.decorator";
import {IUploadItemEvent} from "./toolbar/interface/IUploadItemEvent";
import {NotificationsService} from "angular2-notifications";
import {IFileEvent} from "./filesList/interface/IFileEvent";
import {Button} from "./toolbar/models/button.model";
import {FilesList} from "./filesList/filesList.component";
import {IToolbarEvent} from "./toolbar/interface/IToolbarEvent";
import {IFileModel} from "./filesList/interface/IFileModel";
import {FileManagerConfiguration} from "./configuration/fileManagerConfiguration.service";
import {IFileTypeFilter} from "./toolbar/interface/IFileTypeFilter";
import {ICropBounds} from "./crop/ICropBounds";

@Component({
  selector: 'filemanager',
  providers: [FolderService, FilesService, NotificationsService],
  styleUrls: ['./main.less'],
  templateUrl: './filemanager.html'
})
export class FileManagerComponent implements OnInit {
  @ViewChild(TreeComponent)
  public treeComponent: TreeComponent;

  @ViewChild(FilesList)
  public filesList: FilesList;

  /**
   * Current folder all files
   * @typeObserv {Array}
   */
  private currentFolderFilesList: IFileModel[] = [];

  private searchFieldValue: string = '';
  private fileType: IFileTypeFilter;

  /**
   * Folders tree structure
   * @typeObserv {Array}
   */
  public folders: IOuterNode[] = [];

  /**
   * List of filtered files for current selected directory
   * @typeObserv {Array}
   */
  public files: IFileModel[] = [];

  /**
   * Current selected folder id
   */
  public currentFolderId: string;


  public currentSelectedFile: IFileModel;

  public isPreviewMode: boolean = false;
  public isCropMode: boolean = false;

  public notificationOptions = {
    position: ["bottom", "right"],
    timeOut: 3000,
    lastOnBottom: false,
    preventDuplicates: true,
    rtl: true,
    showProgressBar: true,
    pauseOnHover: true
  };

  /**
   * List of context menu
   * @type {IContextMenu[]}
   */
  public menu: IContextMenu[];

  get numberOfSelectedItems() {
    if (this.files) {
      return this.files
        .filter((file) => file.selected)
        .length;
    } else {
      return 0;
    }
  }

  constructor(private folderService: FolderService,
              private filesService: FilesService,
              private notifications: NotificationsService,
              private configuration: FileManagerConfiguration) {

    this.menu = configuration.contextMenuItems;
  }

  ngOnInit() {
    this.folderService.load()
      .subscribe((items: IOuterNode[]) => {
        this.folders = items;
      });


    this.loadFiles('');
  }

  /***********************************************************************
   * FOLDER EVENTS
   **********************************************************************/

  @log
  public onAddFolder($event: IToolbarEvent) {
    this.treeComponent.addNode($event.value);
  }

  @log
  public onAdd(event: ITreeItemEvent) {
    let node = event.node;
    let parentNode = node.parentNode;
    let parentNodeId = parentNode ? parentNode.id : null;

    this.folderService.save(event.node.data, parentNodeId)
      .subscribe((folder: IOuterNode) => {
        node.refresh(folder);
      });
  }

  @log
  public onRemove(event: ITreeItemEvent) {
    let node = event.node;
    this.folderService.remove(node.id)
      .subscribe(() => {
        if (node.id === this.currentFolderId) {
          this.currentFolderId = null;
        }

        node.remove();
        this.loadFiles(this.currentFolderId);
      });
  }

  @log
  public onChange(event: ITreeItemEvent) {
    let node = event.node;

    this.folderService.update(node.toJSON())
      .subscribe((folder: IOuterNode) => {
        node.refresh(folder);
        node.collapse();
        node.expand();
      });
  }

  @log
  public onToggle(event: ITreeItemEvent) {
    if (event.status) {
      this.folderService.load(event.node.id)
        .subscribe((folders: IOuterNode[]) => {
          for (let folder of folders) {
            event.node.addChild(folder);
          }
        });
    } else {
      event.node.resetChildren();
    }
  }

  @log
  public onSelect(event: ITreeItemEvent) {
    if (event.status) {
      this.loadFiles(event.node.id);
      this.currentFolderId = event.node.id;
    } else {
      this.loadFiles('');
      this.currentFolderId = null;
    }
  }


  /***********************************************************************
   * FILE EVENTS
   **********************************************************************/


  /**
   * Run when all files are uploaded
   * @param folderId
   */
  public onUpload(folderId: string) {
    this.loadFiles(folderId);

    this.notifications.success('File upload', 'Upload complete');
  }

  /**
   * Run when single file is uploaded
   * @param eventData
   */
  public onUploadItem(eventData: IUploadItemEvent) {
    if (eventData.status === 409) {
      this.notifications.alert('File upload', `${eventData.name} exists on the server in this directory`);
    }
  }

  @log
  public onRenameFile(fileEventData: IFileEvent) {
  }

  @log
  public onDeleteFile(fileEventData: IFileEvent) {
    this.removeSingleFile(fileEventData.file);
  }

  @log
  public onPreviewFile(fileEventData: IFileEvent) {
    this.isPreviewMode = true;
    this.currentSelectedFile = fileEventData.file;
  }

  @log
  public onOpenCropFileEditor(fileEventData: IFileEvent) {
    this.isCropMode = true;
    this.currentSelectedFile = fileEventData.file;
  }

  @log
  public onCropFile(event: any) {
    let file: IFileModel = event.file;
    let bounds: ICropBounds = event.bounds;

    this.filesService.crop(file, bounds)
      .subscribe(
        (data: any) => {
          file.fromJSON(data);
          this.closeModal();
          this.reloadFiles();
          this.notifications.success('Crop Image', 'Image has been cropped');
        },
        () => {
          this.notifications.error('Crop Image', 'Image has not been cropped');
        }
      );
  }

  /***********************************************************************
   * TOOLBAR EVENTS
   **********************************************************************/

  @log
  public onMenuButtonClick(event: IToolbarEvent) {
    switch (event.name) {
      case Button.DELETE_SELECTION:
        this.files.forEach((file: IFileModel) => {
          if (file.selected) {
            this.removeSingleFile(file);
          }
        });
        break;
      case Button.SELECT_ALL:
        this.filesList.allFilesSelection(true);
        break;
      case Button.UNSELECT_ALL:
        this.filesList.allFilesSelection(false);
        break;
      case Button.INVERSE_SELECTION:
        this.filesList.selectInversion();
        break;
      case Button.REFRESH_FILES_LIST:
        this.reloadFiles();
        break;
    }
  }

  @log
  public onSearchChange(filterValue: string = '') {
    this.searchFieldValue = filterValue;
    this.filterFilesList(this.searchFieldValue, this.fileType);
  }

  @log
  public onFilterTypeChange(type: IFileTypeFilter) {
    this.fileType = type;
    this.filterFilesList(this.searchFieldValue, this.fileType);
  }

  /***********************************************************************
   * OTHER FUNCTIONS
   **********************************************************************/
  @HostListener('window:keydown', ['$event'])
  public keyEvents(event: KeyboardEvent) {
    if (this.isPreviewMode || this.isCropMode) {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    }
  }

  public closeModal() {
    this.isPreviewMode = false;
    this.isCropMode = false;
  }


  private loadFiles(folderId: string) {
    this.filesService.load(folderId)
      .subscribe((files: IOuterFile[]) => {
        this.files = [];
        this.currentFolderFilesList = [];

        files.forEach((file: IOuterFile) => {
          let fileModel = new FileModel(file);
          this.currentFolderFilesList.push(fileModel);
        });

        this.filterFilesList(this.searchFieldValue, this.fileType);
      });
  }

  private reloadFiles() {
    this.loadFiles(this.currentFolderId || '');
  }

  private removeSingleFile(file: IFileModel) {
    this.filesService.remove(file)
      .subscribe(
        () => {
          this.reloadFiles();
          this.notifications.success('File delete', `${file.name} has been deleted`);
        },
        (error: any) => {
          this.notifications.error('File delete', `${file.name} has not been deleted`);
        }
      )
  }

  /**
   * Filter current folder files list
   * @param search
   * @param type
   */
  private filterFilesList(search: string, type: IFileTypeFilter = null) {
    let files: IFileModel[] = this.currentFolderFilesList.copyWithin(0, 0);

    search = search.toLocaleLowerCase() || '';

    if (search) {
      search.toLocaleLowerCase();
      files = files.filter((fileModel) => {
        return fileModel.name.toLocaleLowerCase().indexOf(search) > -1;
      });
    }

    if (type && type.mimes.length > 0) {

      files = files.filter((fileModel) => {
        return type.mimes.indexOf(fileModel.getMime()) > -1;
      });
    }

    this.files = files;
  }
}
