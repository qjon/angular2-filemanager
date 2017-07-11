import {FileItem, FileUploader} from 'ng2-file-upload';
import {IImageDataProperties, ImageDataConverter} from './imageDataConverter.service';

export class ExtendedFileUploader extends FileUploader {

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

      this._onProgressItem(value, 50);
      imageDataConverter.getProperties(value._file)
        .subscribe((file: IImageDataProperties) => {
          this.isUploading = false;

          this._onProgressItem(value, 100);
          this._onCompleteItem(value, JSON.stringify(file), 200, {});
        })
    }
  }
}
