import {FileItem, FileLikeObject, FileUploader, FileUploaderOptions} from 'ng2-file-upload';
import {IFileDataProperties, ImageDataConverter} from './imageDataConverter.service';
import {FilemanagerNotifcations, INotification} from './FilemanagerNotifcations';

export class ExtendedFileUploader extends FileUploader {

  public constructor(options: FileUploaderOptions, private filemanagerNotification: FilemanagerNotifcations) {
    super(options);
  }

  public onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: FileUploaderOptions) {
    const notification: INotification = {
      type: 'alert',
      title: 'Add file to queue',
      message: `File not add to queue`
    };

    if (filter.name === 'fileSize') {
      notification.message = `File size is too large - max size  is ${options.maxFileSize / 1024} KB`;
    } else {
      notification.message = `File mime type "${item.type}" is not allowed`;
    }
    this.filemanagerNotification.sendNotification(notification)
  }

  public uploadItem(value: FileItem): void {
    if (this.options.url) {
      super.uploadItem(value);
    } else {
      let imageDataConverter = new ImageDataConverter();
      this._onProgressItem(value, 0);

      if (this.isUploading) {
        return;
      }

      this.isUploading = true;

      const header = this.options.headers.find((object: any) => object.name === 'folderId');

      this._onProgressItem(value, 50);
      imageDataConverter.getProperties(value._file, header.value)
        .subscribe((file: IFileDataProperties) => {
          this.isUploading = false;

          this._onProgressItem(value, 100);
          this._onCompleteItem(value, JSON.stringify(file), 200, {});
        })
    }
  }
}
