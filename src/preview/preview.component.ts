import {Component, Input, OnChanges, HostListener} from '@angular/core';
import {IFileModel} from '../filesList/interface/IFileModel';
import {FileModel} from '../filesList/file.model';

@Component({
  selector: 'ri-file-preview',
  templateUrl: './preview.html'
})

export class PreviewComponent implements OnChanges {
  /**
   * Collection of files
   */
  @Input() files: IFileModel[];

  /**
   * Current viewed file
   */
  @Input() file: IFileModel;

  /**
   * Current index
   * @type {number}
   */
  public currentIndex = 0;

  private length = 0;

  ngOnChanges() {
    this.length = this.files.length;

    const selectedFiles = this.files
      .filter((file: FileModel) => file.getId() === this.file.getId());

    this.currentIndex = selectedFiles.length === 1 ? this.files.indexOf(selectedFiles[0]) : -1;
  }

  public next() {
    if (this.currentIndex < this.length - 1) {
      this.currentIndex++;
    }
  }

  public prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  @HostListener('window:keydown', ['$event'])
  public keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 37 || event.keyCode === 74) {
      this.prev();
    }

    if (event.keyCode === 39 || event.keyCode === 75) {
      this.next();
    }
  }
}
