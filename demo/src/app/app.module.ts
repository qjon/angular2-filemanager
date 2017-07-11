import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FileManagerModule} from '../../../main';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileManagerModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: 'fileManagerUrls', useValue: {foldersUrl: '/api/folder', filesUrl: null, folderMoveUrl: '/api/folder/move'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
