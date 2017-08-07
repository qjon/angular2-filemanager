import {Component} from '@angular/core';
import {ISelectFile} from "../../../main";
import {FileManagerConfiguration} from '../../../src/configuration/fileManagerConfiguration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public constructor(public fileManagerConfiguration: FileManagerConfiguration) {

  }

  public toggleMultiSelection() {
    this.fileManagerConfiguration.isMultiSelection = !this.fileManagerConfiguration.isMultiSelection;
  }
}
