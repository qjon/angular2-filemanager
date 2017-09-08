import {IOuterFile} from '../src/filesList/interface/IOuterFile';
import {IFileModel} from '../src/filesList/interface/IFileModel';
import {FileModel} from '../src/filesList/file.model';

export const fileData: IOuterFile = {
  id: '39097132-ed56-3c72-bfd7-898e1cc00299',
  folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
  name: 'avatar.jpg',
  type: 'image/jpeg',
  url: 'some base 64png',
  thumbnailUrl: 'some base 64png',
  size: 6076,
  width: 125,
  height: 125
};

export const filesData: IOuterFile[] = [
  {
    id: 'BANER2.png',
    folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
    name: 'BANER2.png',
    thumbnailUrl: '/uploads/BANER2.png',
    url: '/uploads/BANER2.png',
    type: 'image/png',
    size: 6076,
    width: 1100,
    height: 300
  },
  {
    id: 'RK1409_7D_2500960px.jpg',
    folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
    name: 'RK1409_7D_2500960px.jpg',
    thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
    url: '/uploads/RK1409_7D_2500960px.jpg',
    type: 'image/jpeg',
    size: 6076,
    width: 960,
    height: 640
  },
  {
    id: 'RK1409_7D_2544-Edit960px.jpg',
    folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
    name: 'RK1409_7D_2544-Edit960px.jpg',
    thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
    url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
    type: 'image/jpeg',
    size: 6076,
    width: 960,
    height: 640,
    selected: true
  }
];

export const filesDataModels: IFileModel[] = filesData.map((file: IOuterFile) => new FileModel(file));
