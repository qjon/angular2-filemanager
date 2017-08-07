import {IContextMenu} from '@rign/angular2-tree';
import {Injectable, Inject} from '@angular/core';
import {IFileTypeFilter} from '../toolbar/interface/IFileTypeFilter';
import {ICropSize} from '../crop/ICropSize';
import {IUrlConfiguration} from './IUrlConfiguration';
import {IFileManagerConfiguration} from './IFileManagerConfiguration';

@Injectable()
export class FileManagerConfiguration {

  public allowedCropSize: ICropSize[] = [
    {
      name: 'Landscape',
      width: 300,
      height: 100
    },
    {
      name: 'Portrait',
      width: 200,
      height: 300
    }
  ];

  public contextMenuItems: IContextMenu[] = [];

  public fileTypesFilter: IFileTypeFilter[] = [
    {
      name: 'ALL',
      mimes: [],
      iconCls: 'fa fa-file-o',
      text: 'All files',
      defaultSelected: true
    },
    {
      name: 'IMAGES',
      mimes: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'],
      iconCls: 'fa fa-picture-o',
      text: 'Images'
    },
    {
      name: 'AUDIO',
      mimes: ['audio/mpeg', 'audio/x-ms-wma', 'audio/vnd.rn-realaudio', 'audio/x-wav', 'audio/mp3'],
      iconCls: 'fa fa-file-audio-o',
      text: 'Audio'
    },
    {
      name: 'VIDEO',
      mimes: ['video/mpeg', 'video/mp4', 'video/quicktime', 'video/x-ms-wmv'],
      iconCls: 'fa fa-file-video-o',
      text: 'Video'
    },
    {
      name: 'ARCHIVE',
      mimes: ['application/zip'],
      iconCls: 'fa fa-file-archive-o',
      text: 'Archive'
    }
  ];

  public fileUrl = '/api/files';

  public isMultiSelection: boolean;

  public maxFileSize: number;

  public mimeTypes: string[] | null;

  constructor(@Inject('fileManagerConfiguration') configuration: IFileManagerConfiguration) {
    this.fileUrl = configuration.urls.filesUrl;
    this.isMultiSelection = configuration.isMultiSelection || false;
    this.maxFileSize = configuration.maxFileSize || 0;
    this.mimeTypes = configuration.mimeTypes || null;
  }
}
