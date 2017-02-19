import {IOuterFile} from "./IOuterFile";
import {IFileModel} from "./interface/IFileModel";

export class FileModel implements IFileModel {
  static smallIconsFolder: string = '/icons/128px/';
  static bigIconsFolder: string = '/icons/512px/';

  private _orgData: IOuterFile;
  private _name: string;

  private _iconsFolder = FileModel.smallIconsFolder;

  public selected: boolean = false;

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
    return this._orgData.mime;
  }

  public getWidth(): number {
    return this._orgData.width || 0;
  }

  public isImage() {
    return ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'].indexOf(this.getMime()) > -1;
  }

}
