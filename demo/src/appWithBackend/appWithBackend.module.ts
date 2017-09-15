import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppWithBackendComponent} from './appWithBackend.component';
import {FileManagerModule, FileManagerApiService, IFileManagerConfiguration, FileManagerBackendApiService} from '../../../main';

const fileManagerConfiguration: IFileManagerConfiguration = {
  urls: {
    foldersUrl: '/api/folder',
    filesUrl: '/api/files',
    folderMoveUrl: '/api/folder/move'
  },
  isMultiSelection: true,
  mimeTypes: ['image/jpg', 'image/jpeg', 'image/png'],
  maxFileSize: 5 * 1024 * 1024
};

@NgModule({
  declarations: [
    AppWithBackendComponent
  ],
  imports: [
    BrowserModule,
    FileManagerModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: 'fileManagerConfiguration', useValue: fileManagerConfiguration},
    {provide: FileManagerApiService, useClass: FileManagerBackendApiService}
  ],
  bootstrap: [AppWithBackendComponent]
})
export class AppWithBackendModule {
}
