import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppWithBackendComponent} from './appWithBackend.component';
import {
  FileManagerModule,
  FileManagerApiService,
  IFileManagerConfiguration,
  FileManagerBackendApiService
} from '../../../main';
import {TranslateModule, TranslateService} from 'ng2-translate';

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
    FileManagerModule.forRoot(fileManagerConfiguration, {provide: FileManagerApiService, useClass: FileManagerBackendApiService}),
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
  ],
  bootstrap: [AppWithBackendComponent]
})
export class AppWithBackendModule {

  public constructor(translate: TranslateService) {
    translate.use('en');
  }
}
