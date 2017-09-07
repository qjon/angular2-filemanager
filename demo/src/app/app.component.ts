import {Component} from '@angular/core';
import {FileManagerConfiguration, FileManagerDispatcherService} from '../../../main';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public constructor(public fileManagerConfiguration: FileManagerConfiguration,
                     private fileManagerDispatcher: FileManagerDispatcherService) {
  }

  public toggleMultiSelection() {
    this.fileManagerConfiguration.isMultiSelection = !this.fileManagerConfiguration.isMultiSelection;

    if (!this.fileManagerConfiguration.isMultiSelection) {
      this.fileManagerDispatcher.unSelectAllFiles();
    }
  }
}
