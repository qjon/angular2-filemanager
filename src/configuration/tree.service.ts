import {Injectable, Inject} from '@angular/core';
import {NodeService} from '@rign/angular2-tree';
import {Http} from '@angular/http';
import {IFileManagerConfiguration} from './IFileManagerConfiguration';

@Injectable()
export class TreeService extends NodeService {
  public constructor(protected http: Http, @Inject('fileManagerConfiguration') configuration: IFileManagerConfiguration) {
    super(http);

    this.apiConfig = {
      addUrl: configuration.urls.foldersUrl,
      getUrl: configuration.urls.foldersUrl,
      updateUrl: configuration.urls.foldersUrl,
      removeUrl: configuration.urls.foldersUrl,
      moveUrl: configuration.urls.folderMoveUrl
    };
  }
}
