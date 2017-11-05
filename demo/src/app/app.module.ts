import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FileManagerModule, IFileManagerConfiguration} from '../../../main';
import {TranslateModule, TranslateService} from 'ng2-translate';

const fileManagerConfiguration: IFileManagerConfiguration = {
  urls: {
    foldersUrl: '/api/folder',
    filesUrl: null,
    folderMoveUrl: '/api/folder/move'
  },
  isMultiSelection: true,
  mimeTypes: ['image/jpg', 'image/jpeg', 'image/png'],
  maxFileSize: 50 * 1024
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileManagerModule.forRoot(fileManagerConfiguration),
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  public constructor(translate: TranslateService) {
    translate.use('en');
  }
}
