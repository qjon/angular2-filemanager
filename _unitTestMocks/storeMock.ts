import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';

export class MockStore<T> extends BehaviorSubject<T> {
  constructor(private _initialState: T) {
    super(_initialState);
  }
  dispatch = (action: Action): void => {
  }

  select = <T, R>(pathOrMapFn: any, ...paths: string[]): Observable<R> => {
    return map.call(this, pathOrMapFn);
  }
  nextMock(mock: T) {
    this.next(mock);
  }
}
