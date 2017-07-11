import {Injectable} from '@angular/core';
import {IOuterNode} from '@rign/angular2-tree';
import {Observable} from 'rxjs/Observable';
import {UUID} from 'angular2-uuid';
import {IFileManagerApi} from './IFileManagerApi';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {IFileDataProperties} from '../services/imageDataConverter.service';

@Injectable()
export class FileManagerApiService implements IFileManagerApi {
  protected treeName = 'fileManagerTree';
  protected fileManagerName = 'fileManagerFiles';


  protected nodes: IOuterNode[];
  protected files: IFileDataProperties[];

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

    this.saveNodes();

    return Observable.of(node);
  }

  public move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode> {
    const srcId = srcNode.id;
    const targetId = targetNode ? targetNode.id : null;

    const index = this.findIndexByNodeId(srcId);

    this.nodes[index].parentId = targetId;
    this.saveNodes();

    return Observable.of(this.nodes[index]);
  }

  public update(node: IOuterNode): Observable<IOuterNode> {
    const index = this.findIndexByNodeId(node.id);

    this.nodes[index] = node;
    this.saveNodes();

    return Observable.of(node);
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


  public loadFiles(nodeId = ''): Observable<IOuterFile[]> {
    if (!this.files) {
      this.files = this.getAllFileDataFromLocalStorage();
    }

    const files = this.getFilesFromFolder(nodeId);

    const newFiles: IOuterFile[] = files.map((file: IFileDataProperties) => {
      return this.convertLocalData2IOuterFile(file);
    });

    return Observable.of(newFiles);
  }

  public uploadFile(file: IOuterFile): Observable<IOuterFile> {
    const fileData = this.convertIOuterFile2LocalData(file);
    this.files.push(fileData);
    this.saveFiles();

    return Observable.of(this.convertLocalData2IOuterFile(fileData));
  }


  private findIndexByNodeId(nodeId: string): number {
    return this.nodes.findIndex((node) => {
      return node.id === nodeId;
    });
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
    } catch (e) {
      console.warn('State not save');
    }
  }

  private saveFiles() {
    try {
      localStorage.setItem(this.fileManagerName, JSON.stringify(this.files));
    } catch (e) {
      console.warn('State not save');
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
      width: 0,
      height: 0,
      mime: file.type,
      size: file.size
    }
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
      type: file.mime,
      data: file.data,
      size: file.size
    }
  }
}
