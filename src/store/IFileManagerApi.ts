import {Observable} from 'rxjs/Observable';
import {IOuterNode} from '@rign/angular2-tree';
import {IOuterFile} from '../filesList/interface/IOuterFile';


export interface IFileManagerApi {
  add(node: IOuterNode, parentNodeId: string): Observable<IOuterNode>;
  load(nodeId: string): Observable<IOuterNode[]>;
  move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;
  update(node: IOuterNode): Observable<IOuterNode>;
  remove(nodeId: string): Observable<IOuterNode>;

  loadFiles(nodeId: string): Observable<IOuterFile[]>;
}
