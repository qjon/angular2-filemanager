import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchFilterService {
  /**
   * File type filter
   */
  public filter$: BehaviorSubject<string> = new BehaviorSubject('');

  public getValue(): string {
    return this.filter$.getValue();
  }

  public setValue(value: string) {
    this.filter$.next(value);
  }
}
