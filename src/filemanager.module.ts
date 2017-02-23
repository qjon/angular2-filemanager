import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TreeModule, ConfigService} from "@rign/angular2-tree/main";
import {SimpleNotificationsModule} from "angular2-notifications";
import {ConfirmModule} from "angular2-bootstrap-confirm";
import {FileManagerComponent} from "./filemanager.component";
import {Toolbar} from "./toolbar/toolbar.component";
import {FilesList} from "./filesList/filesList.component";
import {ImageCropperComponent} from "ng2-img-cropper";
import {CropComponent} from "./crop/crop.component";
import {PreviewComponent} from "./preview/preview.component";
import {Dropdown} from "./dropdown/dropdown.component";
import {FileUploadModule} from "ng2-file-upload";
import {FileManagerConfiguration} from "./configuration/fileManagerConfiguration.service";
import {TreeUrls} from "./configuration/treeUrls.service";
import {FileManagerUploader} from "./filesList/fileManagerUploader.service";

@NgModule({
  imports: [
    BrowserModule,
    ConfirmModule,
    FormsModule,
    FileUploadModule,
    HttpModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    TreeModule
  ],
  declarations: [
    FileManagerComponent,
    Toolbar,
    FilesList,
    Dropdown,
    PreviewComponent,
    CropComponent,
    ImageCropperComponent
  ],
  entryComponents: [ImageCropperComponent],
  providers: [
    FileManagerConfiguration,
    FileManagerUploader,
    {provide: ConfigService, useClass: TreeUrls}
  ],
  exports: [FileManagerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileManagerModule {

}
