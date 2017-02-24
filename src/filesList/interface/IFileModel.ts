import {IOuterFile} from "./IOuterFile";
export interface IFileModel {
  name: string;
  thumbnailUrl: string;
  url: string;
  selected: boolean;
  fromJSON(data: IOuterFile): void;
  getId(): string|number;
  getMime(): string;
  getWidth(): number;
  getHeight(): number;
}
