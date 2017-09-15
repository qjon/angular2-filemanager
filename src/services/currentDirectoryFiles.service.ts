import {ITreeState} from '@rign/angular2-tree';
import {SearchFilterService} from './searchFilter.service';
import {FileTypeFilterService} from './fileTypeFilter.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {FileModel} from '../filesList/file.model';
import {
  getAll, IFileManagerState, isChangeStateFiles, isChangeStateSelectedFiles,
  storeEntities
} from '../store/fileManagerReducer';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {IFileTypeFilter} from '../toolbar/interface/IFileTypeFilter';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';

@Injectable()
export class CurrentDirectoryFilesService {

  /**
   * List of all files
   */
  public files$: Observable<FileModel[]>;

  /**
   * List of files for current selected directory
   */
  public filteredFiles$: Observable<FileModel[]>;

  /**
   * List of all files as JSON data
   */
  public entities$: Observable<storeEntities>;

  /**
   * List of selected file ids
   */
  public selectedFiles$: Observable<string[]>;

  /**
   * List of all files in current directory
   */
  public currentDirectoryFileIds$: Observable<string[]>;

  /**
   * @param {Store<ITreeState>} store
   * @param {FileTypeFilterService} fileTypeFilter
   * @param {SearchFilterService} searchFilterService
   */
  public constructor(private store: Store<IFileManagerState>,
                     private fileTypeFilter: FileTypeFilterService,
                     private searchFilterService: SearchFilterService) {

    const observable$ = this.store.select('files');
    this.entities$ = observable$
      .map((state: IFileManagerState) => state.entities)
      .distinctUntilChanged();

    this.currentDirectoryFileIds$ = observable$
      .map((state: IFileManagerState) => state.files)
      .distinctUntilChanged();

    this.selectedFiles$ = this.store.select('files').map((state: IFileManagerState) => state.selectedFiles);

    this.files$ = this.getFilesStream();
    this.filteredFiles$ = this.getCurrentDirectoryFilesStream();
  }

  /**
   * Return stream of files
   *
   * @returns {Observable<FileModel[]>}
   */
  private getFilesStream(): Observable<FileModel[]> {
    return this.currentDirectoryFileIds$
      .withLatestFrom(this.entities$)
      .map((ar: any) => {
        return {
          entities: ar[1],
          files: ar[0]
        };
      })
      .map((state: any) => {
        return getAll(state)
          .map((file: IOuterFile) => {
            return new FileModel(file);
          });
      });
  }

  /**
   * Return stream of current directory filtered files
   *
   * @returns {Observable<FileModel[]>}
   */
  private getCurrentDirectoryFilesStream(): Observable<FileModel[]> {
    return Observable.combineLatest(
      this.files$,
      this.fileTypeFilter.filter$,
      this.searchFilterService.filter$
    )
      .map((data: [FileModel[], IFileTypeFilter, string]): FileModel[] => {
        let files = data[0];
        const fileTypeFilter = data[1];
        const search = data[2].toLocaleLowerCase();

        if (search !== '') {
          files = files.filter((file: FileModel) => {
            return file.name.toLocaleLowerCase().indexOf(search) > -1;
          });
        }


        if (fileTypeFilter && fileTypeFilter.mimes.length > 0) {
          files = files.filter((file: FileModel) => {
            return fileTypeFilter.mimes.indexOf(file.getMime()) > -1;
          });
        }

        return files;
      });
  }
}
