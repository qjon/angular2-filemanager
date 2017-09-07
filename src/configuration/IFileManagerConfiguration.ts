import {IUrlConfiguration} from './IUrlConfiguration';

export interface IFileManagerConfiguration {
  urls: IUrlConfiguration;
  isMultiSelection?: boolean;
  maxFileSize?: number;
  mimeTypes?: string[];
}
