import {ITreeState} from '@rign/angular2-tree';
import {SearchFilterService} from './searchFilter.service';
import {FileTypeFilterService} from './fileTypeFilter.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {FileModel} from '../filesList/file.model';
import {IFileManagerState} from '../store/fileManagerReducer';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {IFileTypeFilter} from '../toolbar/interface/IFileTypeFilter';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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
   * List of all files from current directory which are marked as selected
   *
   * @type {BehaviorSubject<Array>}
   */
  public currentSelection$: BehaviorSubject<FileModel[]> = new BehaviorSubject([]);

  /**
   * @param {Store<ITreeState>} store
   * @param {FileTypeFilterService} fileTypeFilter
   * @param {SearchFilterService} searchFilterService
   */
  public constructor(private store: Store<ITreeState>,
                     private fileTypeFilter: FileTypeFilterService,
                     private searchFilterService: SearchFilterService) {

    this.files$ = this.getFilesStream();
    this.filteredFiles$ = this.getCurrentDirectoryFilesStream();
    this.initCurrentSelection();
  }

  /**
   * Return stream of files
   *
   * @returns {Observable<FileModel[]>}
   */
  private getFilesStream(): Observable<FileModel[]> {
    return this.store.select('files')
      .map((data: IFileManagerState): FileModel[] => {
        return data.map((file: IOuterFile) => new FileModel(file));
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

  /**
   * Init current selection listener, each time filtered files are changed, it change selection stream
   */
  private initCurrentSelection(): void {
    this.filteredFiles$
      .map((files: FileModel[]) => {
        return files.filter((file: FileModel) => file.selected);
      })
      .subscribe((files: FileModel[]) => {
        this.currentSelection$.next(files);
      })
  }
}
