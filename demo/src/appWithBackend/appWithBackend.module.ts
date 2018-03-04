import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppWithBackendComponent} from './appWithBackend.component';
import {
  FileManagerModule,
  FileManagerApiService,
  IFileManagerConfiguration,
  FileManagerBackendApiService
} from '../../../main';
import {TranslateModule, TranslateService} from 'ng2-translate';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TreeModule} from '@rign/angular2-tree';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';

export const fileManagerConfiguration: IFileManagerConfiguration = {
  urls: {
    foldersUrl: '/api/folder',
    filesUrl: '/api/files',
    folderMoveUrl: '/api/folder/move'
  },
  isMultiSelection: true,
  mimeTypes: ['image/jpg', 'image/jpeg', 'image/png'],
  maxFileSize: 5 * 1024 * 1024,
  allowChooseMultipleFiles: true
};

@NgModule({
  declarations: [
    AppWithBackendComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ConfirmationPopoverModule.forRoot(),
    EffectsModule.forRoot([]),
    FileManagerModule.forRoot(fileManagerConfiguration, {provide: FileManagerApiService, useClass: FileManagerBackendApiService}),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    TreeModule.forRoot(),
    TranslateModule.forRoot(),
  ],
  bootstrap: [AppWithBackendComponent]
})
export class AppWithBackendModule {

  public constructor(private translate: TranslateService) {
    this.setTranslationForEN();
    this.translate.use('en');
  }

  private setTranslationForEN(): void {
    this.translate.setTranslation('en', {
      RI_TREE_LBL_ADD_NODE: 'Add data',
      RI_TREE_LBL_EDIT_NODE: 'Edit data',
      RI_TREE_LBL_REMOVE_NODE: 'Delete data',
      RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level',
      RI_FM_BTN_LANDSCAPE: 'Landscape',
      RI_FM_BTN_PORTRAIT: 'Portrait',
      RI_FM_BTN_SAVE: 'Save',
      RI_FM_LBL_CHOOSE_SELECTION: 'Choose selection',
      RI_FM_LBL_DELETE_SELECTION: 'Delete selection',
      RI_FM_LBL_INVERSE_SELECTION: 'Inverse selection',
      RI_FM_LBL_SEARCH_FOR: 'Search for...',
      RI_FM_LBL_SELECT_ALL: 'Select all',
      RI_FM_LBL_UNSELECT_ALL: 'Unselect all',
    });
  }
}
