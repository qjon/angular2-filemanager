import {Observable} from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {UUID} from 'angular2-uuid';

export interface IFileDataProperties {
  id: string;
  name: string;
  size: number;
  data: string;
  type: string;
}

export interface IImageDataProperties extends IFileDataProperties {
  width?: number;
  height?: number;
}

export interface IImageDimensions {
  width: number;
  height: number;
}

@Injectable()
export class ImageDataConverter {
  public getProperties(file: File): Observable<IImageDataProperties> {
    let properties: IImageDataProperties = {
      id: UUID.UUID(),
      name: file.name,
      size: file.size,
      type: file.type,
      data: ''
    };

    let reader = this.getBase64FromFile(file);

    return reader
      .concatMap((data: string) => {
        properties.data = data;

        if (properties.type.indexOf('image') === 0) {
          return this.getImageDimensions(data);
        } else {
          return Observable.of({width: 0, height: 0});
        }
      })
      .map((dimensions: IImageDimensions) => {
        properties.width = dimensions.width;
        properties.height = dimensions.height;

        return properties;
      })
  }

  /**
   * Create observable which return image as base64 data
   *
   * @param file
   * @return Observable<string>
   */
  private getBase64FromFile(file: File): Observable<string> {
    let reader = new FileReader();
    reader.readAsDataURL(file);


    return Observable.fromEvent(reader, 'load')
      .map(() => {
        console.log(reader);
        return reader.result;
      });
  };

  /**
   * Create observable which return dimensions of the image
   *
   * @param data
   * @returns {Observable<IImageDimensions>}
   */
  private getImageDimensions(data: string): Observable<IImageDimensions> {
    let image = new Image();
    image.src = data;
    image.style.display = 'none';

    const loadImage = Observable.fromEvent(image, 'load')
      .map(() => {
        return {
          width: image.naturalWidth,
          height: image.naturalHeight
        }
      });

    document.body.appendChild(image);

    return loadImage;
  }
}
