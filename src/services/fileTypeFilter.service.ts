import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IFileTypeFilter} from '../toolbar/interface/IFileTypeFilter';

@Injectable()
export class FileTypeFilterService {

  /**
   * File type filter
   */
  public filter$: BehaviorSubject<IFileTypeFilter | null> = new BehaviorSubject(null);

  public getValue(): IFileTypeFilter | null {
    return this.filter$.getValue();
  }

  public setValue(value: IFileTypeFilter | null) {
    this.filter$.next(value);
  }
}
