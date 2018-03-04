import {Injectable} from '@angular/core';
import {IOuterNode} from '@rign/angular2-tree';
import {Observable} from 'rxjs/Observable';
import {UUID} from 'angular2-uuid';
import {IFileManagerApi} from './IFileManagerApi';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {IFileDataProperties} from '../services/imageDataConverter.service';
import {ICropBounds} from '../crop/ICropBounds';
import {FilemanagerNotifcations} from '../services/FilemanagerNotifcations';
import {AbstractFileManagerApiService} from './fileManagerApiAbstract.class';
import {INodeService} from '@rign/angular2-tree';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

@Injectable()
export class FileManagerApiService extends AbstractFileManagerApiService implements IFileManagerApi, INodeService {

  public constructor(private filemanagerNotfication: FilemanagerNotifcations) {
    super();
  }


  public load(nodeId = ''): Observable<IOuterNode[]> {
    if (!this.nodes) {
      this.nodes = this.getAllDataFromLocalStorage();
    }

    const nodes = this.getChildren(nodeId);

    return Observable.of(nodes);
  }

  public add(node: IOuterNode, parentNodeId: string = null): Observable<IOuterNode> {
    node.parentId = parentNodeId;
    node.id = UUID.UUID();

    this.nodes.push(node);

    if (this.saveNodes()) {
      return Observable.of(node);
    } else {
      return Observable.empty();
    }

  }

  public move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode> {
    const srcId = srcNode.id;
    const targetId = targetNode ? targetNode.id : '';

    const index = this.findIndexByNodeId(srcId);

    this.nodes[index].parentId = targetId;

    if (this.saveNodes()) {
      return Observable.of(this.nodes[index]);
    } else {
      return Observable.empty();
    }

  }

  public update(node: IOuterNode): Observable<IOuterNode> {
    const index = this.findIndexByNodeId(node.id);

    this.nodes[index] = node;

    if (this.saveNodes()) {
      return Observable.of(node);
    } else {
      return Observable.empty();
    }
  }

  public remove(nodeId: string): Observable<IOuterNode> {
    const index = this.findIndexByNodeId(nodeId);
    const node = this.nodes[index];

    const hasChildren = this.getChildren(nodeId).length > 0;

    if (!hasChildren) {
      this.nodes.splice(index, 1);

      this.saveNodes();

      return Observable.of(node);
    } else {
      return Observable.throw('Node is not empty');
    }
  }

  /**
   * Crop file
   *
   * @param {IOuterFile} file
   * @param {ICropBounds} bounds
   * @returns {Observable<IOuterFile>}
   */
  public cropFile(file: IOuterFile, bounds: ICropBounds): Observable<IOuterFile> {
    return Observable.throw('This functionality is not available with LocalStorage');
  }

  /**
   * Load files from directory
   *
   * @param {string} nodeId
   * @returns {Observable<IOuterFile[]>}
   */
  public loadFiles(nodeId = ''): Observable<IOuterFile[]> {
    this.currentNodeId = nodeId;

    if (!this.files) {
      this.files = this.getAllFileDataFromLocalStorage();
    }

    const files = this.getFilesFromFolder(nodeId);

    const newFiles: IOuterFile[] = files.map((file: IFileDataProperties) => {
      return this.convertLocalData2IOuterFile(file);
    });

    return Observable.of(newFiles);
  }

  public removeFile(file: IOuterFile): Observable<boolean> {
    const index = this.findIndexByFileId(file.id.toString());

    if (index === -1) {
      return Observable.of(false);
    }

    this.files.splice(index, 1);
    this.saveFiles();

    return Observable.of(true);
  }

  public removeSelectedFiles(selectedFiles: string[]) {
    const numberOfFiles = this.files.length;

    selectedFiles.forEach((fileId: string) => {
      const index = this.findIndexByFileId(fileId);

      if (index > -1) {
        this.files.splice(index, 1);
      }
    });

    this.saveFiles();

    return Observable.of((this.files.length + selectedFiles.length === numberOfFiles));
  }

  public uploadFile(file: IOuterFile): Observable<IOuterFile> {
    const fileData = this.convertIOuterFile2LocalData(file);
    this.files.push(fileData);

    if (this.saveFiles()) {
      return Observable.of(this.convertLocalData2IOuterFile(fileData));
    } else {
      return Observable.throw('Upload error');
    }
  }

  /**
   * @param {IOuterFile[]} files
   * @param {IOuterNode} node
   * @returns {Observable<IOuterFile[]>}
   */
  public moveFile(files: IOuterFile[], node: IOuterNode = null): Observable<IOuterFile[]> {
    const ids: string[] = files.map(file => file.id.toString());
    const folderId = node ? node.id.toString() : '';

    const movedFiles = this.files.filter(file => ids.indexOf(file.id.toString()) > -1);
    const errorMsg = 'Can not move file to the same folder';

    let isMovedToSameFolder = false;

    movedFiles.forEach((file) => {
      if (node) {
        if (node.id === file.folderId) {
        }
      } else {
        if (file.folderId === '' || file.folderId === null) {
          return Observable.throw(errorMsg);
        }
      }


      file.folderId = folderId;
    });

    if (isMovedToSameFolder) {
        return Observable.throw(errorMsg);
    }

    if (this.saveFiles()) {
      return Observable.of(movedFiles.map(file => this.convertLocalData2IOuterFile(file)));
    } else {
      return Observable.throw('Move files error');
    }
  }

  private findIndexByNodeId(nodeId: string): number {
    return this.nodes.findIndex((node) => {
      return node.id === nodeId;
    });
  }

  private findIndexByFileId(fileId: string): number {
    return this.files.findIndex((file) => file.id === fileId);
  }

  private getChildren(nodeId: string): IOuterNode[] {
    return this.nodes.filter((node: IOuterNode) => node.parentId === nodeId);
  }

  private getFilesFromFolder(nodeId: string): IFileDataProperties[] {
    return this.files.filter((file: IFileDataProperties) => file.folderId === nodeId);
  }

  protected getAllDataFromLocalStorage(): IOuterNode[] {
    try {
      const data = localStorage.getItem(this.treeName);

      if (data) {
        return JSON.parse(data);
      }

      return [];

    } catch (e) {
      return [];
    }
  }

  protected getAllFileDataFromLocalStorage(): IFileDataProperties[] {
    try {
      const data = localStorage.getItem(this.fileManagerName);

      if (data) {
        return JSON.parse(data);
      }

      return [];

    } catch (e) {
      return [];
    }
  }

  private saveNodes() {
    try {
      localStorage.setItem(this.treeName, JSON.stringify(this.nodes));

      return true;
    } catch (e) {
      this.filemanagerNotfication.sendNotification({
        type: 'error',
        title: 'State is not saved.',
        message: 'Reload previous state.'
      });

      this.files = null;
      this.nodes = null;

      this.load();

      return false;
    }
  }

  private saveFiles(): boolean {
    try {
      localStorage.setItem(this.fileManagerName, JSON.stringify(this.files));

      return true;
    } catch (e) {
      this.filemanagerNotfication.sendNotification({
        type: 'error',
        title: 'State is not saved.',
        message: 'Reload previous state.'
      });

      const nodeId = this.files[(this.files.length - 1)].folderId || null;

      this.files = null;

      this.load(nodeId);

      return false;
    }
  }

  /**
   *
   * @param file
   * @returns {{id: string, folderId: string, name: string, thumbnailUrl: string, url: string, width: number, height: number, mime: string}}
   */
  private convertLocalData2IOuterFile(file: IFileDataProperties): IOuterFile {
    return {
      id: file.id,
      folderId: file.folderId,
      name: file.name,
      thumbnailUrl: file.data,
      url: file.data,
      width: file.width,
      height: file.height,
      type: file.type,
      size: file.size
    };
  }

  /**
   *
   * @param file
   * @returns {{id: (any|string), folderId: string, name: string, type: string, data: string, size: number}}
   */
  private convertIOuterFile2LocalData(file: IOuterFile): IFileDataProperties {
    return {
      id: file.id.toString(),
      folderId: file.folderId,
      name: file.name,
      type: file.type,
      data: file.data,
      size: file.size,
      width: file.width,
      height: file.height
    };
  }
}
