import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FileManagerModule, IFileManagerConfiguration} from '../../../main';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

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
    FileManagerModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    {provide: 'fileManagerConfiguration', useValue: fileManagerConfiguration}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  public constructor(translate: TranslateService) {
    translate.use('en');
  }
}
