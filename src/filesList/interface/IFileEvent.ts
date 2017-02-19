import {IFileModel} from "./IFileModel";

export interface IFileEvent {
  eventName: string;
  file: IFileModel;
}
