import {Component} from '@angular/core';
import {FileManagerConfiguration} from '../../../src/configuration/fileManagerConfiguration.service';

@Component({
  selector: 'app-root',
  templateUrl: './appWithBackend.component.html',
  styleUrls: ['./appWithBackend.component.less']
})
export class AppWithBackendComponent {
  public constructor(public fileManagerConfiguration: FileManagerConfiguration) {

  }

  public toggleMultiSelection() {
    this.fileManagerConfiguration.isMultiSelection = !this.fileManagerConfiguration.isMultiSelection;
  }
}
