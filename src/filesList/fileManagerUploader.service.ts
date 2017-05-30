import {Injectable, Inject} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {IUrlConfiguration} from '../configuration/IUrlConfiguration';

@Injectable()
export class FileManagerUploader {
  public uploader: FileUploader;


  public constructor(@Inject('fileManagerUrls') urls: IUrlConfiguration) {
    this.uploader = new FileUploader({url: urls.filesUrl});
  }

  public clear() {
    this.uploader.authToken = null;
    this.uploader.setOptions(this.getDefaultOptions());
  }

  public getDefaultOptions() {
    let options = {};
    options['removeAfterUpload'] = true;
    options['autoUpload'] = true;
    options['method'] = 'POST';

    return options;
  }

  public setAuthorizationToken(token:string) {
    this.uploader.authToken = token;
  }

  public setDirectoryId(directoryId: string|number): FileManagerUploader {
    let options = this.getDefaultOptions();

    options['headers'] =  [{name: 'folderId', value: directoryId.toString()}];

    this.uploader.setOptions(options);

    return this;
  }
}
