import {IAppConfig} from "@rign/angular2-tree/main";
import {Inject} from "@angular/core";
import {IUrlConfiguration} from "./IUrlConfiguration";

/**
 * Class override urls for directory tree
 */
export class TreeUrls implements IAppConfig {
  public addUrl: string = '';
  public getUrl: string = '';
  public updateUrl: string = '';
  public removeUrl: string = '';

  constructor(@Inject('fileManagerUrls') urls: IUrlConfiguration) {
    this.addUrl = urls.foldersUrl;
    this.getUrl = urls.foldersUrl;
    this.updateUrl = urls.foldersUrl;
    this.removeUrl = urls.foldersUrl;
  }
}
