import {FileItem, FileUploader, FileUploaderOptions} from 'ng2-file-upload';
import {IImageDataProperties, ImageDataConverter} from "./imageDataConverter.service";

export class ExtendedFileUploader extends FileUploader {

  public uploadItem(value: FileItem): void {
    if (this.options.url) {
      super.uploadItem(value);
    } else {
      let imageDataConverter = new ImageDataConverter();

      if (this.isUploading) {
        return;
      }

      this.isUploading = true;

      imageDataConverter.getProperties(value._file)
        .subscribe((file: IImageDataProperties) => {
          console.log(file);
          this.isUploading = false;

          value._onComplete('', 200, {});
          value._onSuccess('', 200, {});
        })
    }
  }
}
