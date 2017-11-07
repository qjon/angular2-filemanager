import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FileManagerModule, IFileManagerConfiguration} from '../../../main';
import {TranslateModule, TranslateService} from 'ng2-translate';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

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
    EffectsModule.forRoot([]),
    FileManagerModule.forRoot(fileManagerConfiguration),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    TranslateModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  public constructor(translate: TranslateService) {
    translate.use('en');
  }
}
