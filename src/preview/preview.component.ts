import {Component, Input, OnChanges, HostListener} from "@angular/core";
import {IFileModel} from "../filesList/interface/IFileModel";

@Component({
  selector: 'file-preview',
  template: `
        <div class="filemanager-preview">
            <div class="carousel slide">
                <div class="carousel-inner" role="listbox">
                    <div class="item" *ngFor="let file of files; let i = index;" [ngClass]="{'active': i == currentIndex}">
                        <img class="img-rounded" src="{{file.url}}" alt="{{file.name}}" style="margin: 0 auto;">
                        <div class="carousel-caption">{{file.name}}</div>
                    </div>
                </div>
                <a class="left carousel-control" role="button" (click)="prev()" *ngIf="currentIndex != 0">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                </a>
                <a class="right carousel-control"role="button" (click)="next()" *ngIf="currentIndex + 1 < length">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                </a>
            </div>  
        </div>
    `
})

export class PreviewComponent implements OnChanges {
  @Input() files: IFileModel[];
  @Input() file: IFileModel;

  public currentIndex: number = 0;

  private length: number = 0;

  ngOnChanges() {
    this.length = this.files.length;
    this.currentIndex = this.files.indexOf(this.file);
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
