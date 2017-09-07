import {Injectable, Inject} from '@angular/core';
import {ExtendedFileUploader} from '../services/extendedFileUplaoder.service';
import {IFileManagerConfiguration} from '../configuration/IFileManagerConfiguration';
import {FilemanagerNotifcations} from '../services/FilemanagerNotifcations';
import {FileUploaderOptions} from 'ng2-file-upload';

@Injectable()
export class FileManagerUploader {
  public uploader: ExtendedFileUploader;

  public constructor(@Inject('fileManagerConfiguration') configuration: IFileManagerConfiguration,
                     filemanagerNotification: FilemanagerNotifcations) {
    const options: FileUploaderOptions = {
      allowedMimeType: configuration.mimeTypes,
      url: configuration.urls.filesUrl,
      maxFileSize: configuration.maxFileSize
    };

    this.uploader = new ExtendedFileUploader(options, filemanagerNotification);
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

  public setAuthorizationToken(token: string) {
    this.uploader.authToken = token;
  }

  public setDirectoryId(directoryId: string | number): FileManagerUploader {
    let options = this.getDefaultOptions();

    options['headers'] = [{name: 'folderId', value: directoryId.toString()}];

    this.uploader.setOptions(options);

    return this;
  }
}
