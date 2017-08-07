import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Inject} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeModule, treeReducer, TreeEffectsService} from '@rign/angular2-tree';
import {NotificationsService, SimpleNotificationsModule} from 'angular2-notifications';
import {ConfirmModule} from 'angular2-bootstrap-confirm';
import {FileManagerComponent} from './filemanager.component';
import {Toolbar} from './toolbar/toolbar.component';
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
import {FilesService} from './filesList/files.service';
import {FileManagerActionsService} from './store/fileManagerActions.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {FileTypeFilterService} from './services/fileTypeFilter.service';
import {SearchFilterService} from './services/searchFilter.service';
import {FileManagerDispatcherService} from './store/fileManagerDispatcher.service';
import {FileTypeFilterComponent} from './toolbar/fileTypeFilter/fileTypeFilter.component';
import {SearchFileComponent} from './toolbar/searchFile/searchFile.component';
import {FileManagerApiService} from './store/fileManagerApi.service';
import {ImageDataConverter} from './services/imageDataConverter.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FilemanagerNotifcations} from './services/FilemanagerNotifcations';
import {IFileManagerConfiguration} from './configuration/IFileManagerConfiguration';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmModule,
    EffectsModule.run(FileManagerEffectsService),
    FormsModule,
    FileUploadModule,
    HttpModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    StoreModule.provideStore({files: fileManagerReducer, trees: treeReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({}),
    TreeModule
  ],
  declarations: [
    FileManagerComponent,
    FileTypeFilterComponent,
    Toolbar,
    FilesListComponent,
    DropdownComponent,
    PreviewComponent,
    CropComponent,
    ImageCropperComponent,
    SearchFileComponent
  ],
  entryComponents: [ImageCropperComponent],
  providers: [
    FileManagerActionsService,
    FileManagerApiService,
    FileManagerConfiguration,
    FileManagerDispatcherService,
    FileManagerEffectsService,
    FilemanagerNotifcations,
    FileManagerUploader,
    FilesService,
    FileTypeFilterService,
    ImageDataConverter,
    NotificationsService,
    SearchFilterService,
    TreeService
  ],
  exports: [FileManagerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileManagerModule {
  constructor(@Inject('fileManagerConfiguration') private configuration: IFileManagerConfiguration) {
    console.log(configuration);
  }

  private initDefaultConfiguration () {
    this.configuration.isMultiSelection = this.configuration.isMultiSelection || false;
  }
}
