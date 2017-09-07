import {IOuterFile} from './interface/IOuterFile';
import {IFileModel} from './interface/IFileModel';
import {ISelectFile} from './interface/ISelectFile';

export class FileModel implements IFileModel {
  static smallIconsFolder = '/icons/128px/';
  static bigIconsFolder = '/icons/512px/';

  private _orgData: IOuterFile;
  private _name: string;

  private _iconsFolder = FileModel.smallIconsFolder;

  public selected = false;

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get thumbnailUrl() {
    return this.isImage() ? this._orgData.thumbnailUrl : `${FileModel.smallIconsFolder}${this.getFileExt()}.png`;
  }

  get url() {
    return this.isImage() ? this._orgData.url : `${FileModel.bigIconsFolder}${this.getFileExt()}.png`;
  }

  public constructor(data: IOuterFile) {
    this.fromJSON(data);
  }

  public fromJSON(data: IOuterFile) {
    this._orgData = data;

    this.name = data.name;
    this.selected = data.selected || false;
  }

  public toJSON() {
    return this._orgData;
  }

  public getId() {
    return this._orgData.id;
  }

  public getHeight(): number {
    return this._orgData.height || 0;
  }

  public getFileExt() {
    return this.name.split('.').pop();
  }

  public getMime() {
    return this._orgData.type;
  }

  public getWidth(): number {
    return this._orgData.width || 0;
  }

  public isImage() {
    return ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'].indexOf(this.getMime()) > -1;
  }

  public getSelectData(): ISelectFile {
    return {
      id: this.getId(),
      name: this.name,
      url: this.url,
      width: this.getWidth(),
      height: this.getHeight(),
      mime: this.getMime()
    };
  }
}
