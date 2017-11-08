import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Provider, ModuleWithProviders} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeModule} from '@rign/angular2-tree';
import {NotificationsService, SimpleNotificationsModule} from 'angular2-notifications';
import {FileManagerComponent} from './filemanager.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {FilesListComponent} from './filesList/filesList.component';
import {ImageCropperComponent} from 'ng2-img-cropper';
import {CropComponent} from './crop/crop.component';
import {PreviewComponent} from './preview/preview.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FileManagerConfiguration} from './configuration/fileManagerConfiguration.service';
import {FileManagerUploader} from './filesList/fileManagerUploader.service';
import {TreeService} from './configuration/tree.service';
import {EffectsModule} from '@ngrx/effects';
import {FileManagerEffectsService} from './store/fileManagerEffects.service';
import {StoreModule} from '@ngrx/store';
import {fileManagerReducer} from './store/fileManagerReducer';
import {FileManagerActionsService} from './store/fileManagerActions.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FileTypeFilterService} from './services/fileTypeFilter.service';
import {SearchFilterService} from './services/searchFilter.service';
import {FileManagerDispatcherService} from './store/fileManagerDispatcher.service';
import {FileTypeFilterComponent} from './toolbar/fileTypeFilter/fileTypeFilter.component';
import {SearchFileComponent} from './toolbar/searchFile/searchFile.component';
import {FileManagerApiService} from './store/fileManagerApi.service';
import {ImageDataConverter} from './services/imageDataConverter.service';
import {FilemanagerNotifcations} from './services/FilemanagerNotifcations';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {FileManagerBackendApiService} from './store/fileManagerBackendApi.service';
import {CurrentDirectoryFilesService} from './services/currentDirectoryFiles.service';
import {SelectionComponent} from './toolbar/selectionDropDown/selection.component';
import {FileComponent} from './filesList/file/file.component';
import {TranslateModule, TranslateService} from 'ng2-translate';
import {IFileManagerConfiguration} from './configuration/IFileManagerConfiguration';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationPopoverModule.forRoot(),
    EffectsModule.forFeature([FileManagerEffectsService]),
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    StoreModule.forFeature('files', fileManagerReducer),
    StoreDevtoolsModule.instrument({}),
    TranslateModule,
    TreeModule
  ],
  declarations: [
    FileManagerComponent,
    FileComponent,
    FileTypeFilterComponent,
    ToolbarComponent,
    FilesListComponent,
    DropdownComponent,
    PreviewComponent,
    CropComponent,
    ImageCropperComponent,
    SearchFileComponent,
    SelectionComponent,
  ],
  entryComponents: [ImageCropperComponent],
  exports: [FileManagerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileManagerModule {

  public static forRoot(config: IFileManagerConfiguration, apiProvider: Provider = null): ModuleWithProviders {
    return {
      ngModule: FileManagerModule,
      providers: [
        CurrentDirectoryFilesService,
        FileManagerActionsService,
        FileManagerApiService,
        FileManagerBackendApiService,
        FileManagerConfiguration,
        FileManagerDispatcherService,
        FileManagerEffectsService,
        FilemanagerNotifcations,
        FileManagerUploader,
        FileTypeFilterService,
        ImageDataConverter,
        NotificationsService,
        SearchFilterService,
        TreeService,
        {provide: 'fileManagerConfiguration', useValue: config},
        apiProvider ? apiProvider : FileManagerApiService
      ]
    }
  }

  public static forChild(config: IFileManagerConfiguration, apiProvider: Provider = null): ModuleWithProviders {
    return {
      ngModule: FileManagerModule,
      providers: [
        CurrentDirectoryFilesService,
        FileManagerActionsService,
        FileManagerApiService,
        FileManagerBackendApiService,
        FileManagerConfiguration,
        FileManagerDispatcherService,
        FileManagerEffectsService,
        FilemanagerNotifcations,
        FileManagerUploader,
        FileTypeFilterService,
        ImageDataConverter,
        NotificationsService,
        SearchFilterService,
        TreeService,
        {provide: 'fileManagerConfiguration', useValue: config},
        apiProvider ? apiProvider : FileManagerApiService
      ]
    }
  }

  public constructor(private translate: TranslateService) {
    this.setTranslationForEN();
    this.setTranslationForPL();
    this.translate.use('en');
  }

  private setTranslationForPL(): void {
    this.translate.setTranslation('pl', {
      RI_TREE_LBL_ADD_NODE: 'Dodaj',
      RI_TREE_LBL_EDIT_NODE: 'Edytuj',
      RI_TREE_LBL_REMOVE_NODE: 'Usuń',
      RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj',
      RI_FM_BTN_LANDSCAPE: 'Poziomo',
      RI_FM_BTN_PORTRAIT: 'Pionowo',
      RI_FM_BTN_SAVE: 'Zapisz',
      RI_FM_LBL_DELETE_SELECTION: 'Usuń wybrane pliki',
      RI_FM_LBL_INVERSE_SELECTION: 'Odróć zaznaczenie',
      RI_FM_LBL_SEARCH_FOR: 'Szukaj...',
      RI_FM_LBL_SELECT_ALL: 'Zaznacz wszystkie',
      RI_FM_LBL_UNSELECT_ALL: 'Odznacz wszystkie',
    });
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
      RI_FM_LBL_DELETE_SELECTION: 'Delete selection',
      RI_FM_LBL_INVERSE_SELECTION: 'Inverse selection',
      RI_FM_LBL_SEARCH_FOR: 'Search for...',
      RI_FM_LBL_SELECT_ALL: 'Select all',
      RI_FM_LBL_UNSELECT_ALL: 'Unselect all',
    });
  }
}
