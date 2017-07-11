import {FileItem, FileUploader} from 'ng2-file-upload';
import {IFileDataProperties, ImageDataConverter} from './imageDataConverter.service';

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
