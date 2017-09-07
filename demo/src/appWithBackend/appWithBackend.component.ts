import {Component} from '@angular/core';
import {FileManagerConfiguration, FileManagerDispatcherService} from '../../../main';

@Component({
  selector: 'app-root',
  templateUrl: './appWithBackend.component.html',
  styleUrls: ['./appWithBackend.component.less']
})
export class AppWithBackendComponent {
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
