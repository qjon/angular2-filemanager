import {Injectable, Inject} from '@angular/core';
import {NodeService} from '@rign/angular2-tree';
import {Http} from '@angular/http';
import {IUrlConfiguration} from './IUrlConfiguration';

@Injectable()
export class TreeService extends NodeService {
  public constructor(http: Http, @Inject('fileManagerUrls') urls: IUrlConfiguration) {
    super(http);

    this.apiConfig = {
      addUrl: urls.foldersUrl,
      getUrl: urls.foldersUrl,
      updateUrl: urls.foldersUrl,
      removeUrl: urls.foldersUrl,
      moveUrl: urls.folderMoveUrl
    };
  }
}
