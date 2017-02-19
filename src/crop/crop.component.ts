import {
  Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output,
  EventEmitter
} from "@angular/core";
import {FileModel} from "../filesList/file.model";
import {CropperSettings} from "ng2-img-cropper/src/cropperSettings";
import {ImageCropperComponent} from "ng2-img-cropper/src/imageCropperComponent";
import {ICropSize} from "./ICropSize";
import {FileManagerConfiguration} from "../configuration/fileManagerConfiguration.service";
import {Bounds} from "ng2-img-cropper/src/model/bounds";
import {ICropBounds} from "./ICropBounds";

@Component({
  selector: 'crop-image',
  styleUrls: ['./crop.less'],
  template: `
        <div class="crop-image">
            <div class="crop-workbench">
                <div #container></div>
            </div>
            <div class="btn-toolbar">
                <div class="btn-group">
                    <button class="btn btn-primary" *ngFor="let cropSize of cropSizeList" (click)="updateCropSize(cropSize)" [ngClass]="{'active': cropSize == currentCropSize}">{{cropSize.name}}</button>
                </div>
                <div class="btn-group pull-right">
                    <button class="btn btn-success btn-icon" (click)="cropImage()">
                        <i class="fa fa-check"></i>
                        <span>Save</span>
                    </button>
                </div>
            </div>
        </div>
        `
})

export class CropComponent {
  @Input() file: FileModel;

  @Output() onCrop = new EventEmitter();

  @ViewChild('container', {read: ViewContainerRef})
  public container: ViewContainerRef;

  @ViewChild('cropper')
  public cropper: ImageCropperComponent;

  private bounds: Bounds;

  public cropSizeList: ICropSize[];
  public currentCropSize: ICropSize;

  private scale: number = 1;

  constructor(private resolver: ComponentFactoryResolver, private configuration: FileManagerConfiguration) {
    this.cropSizeList = configuration.allowedCropSize;
  }

  updateCropSize(cropSize: ICropSize) {
    let image = new Image();
    const cropperComponent = this.resolver.resolveComponentFactory(ImageCropperComponent);
    const cropperComponentRef = this.container.createComponent(cropperComponent);

    if (this.container.length > 1) {
      this.container.detach(0);
    }

    this.currentCropSize = cropSize;
    cropperComponentRef.instance.settings = this.getCropperSettings();
    cropperComponentRef.instance.image = {};
    cropperComponentRef.instance.onCrop
      .subscribe((bounds: Bounds) => this.bounds = bounds);

    setTimeout(() => {
      image.src = this.file.url;
      cropperComponentRef.instance.setImage(image);
    });
  }

  ngAfterContentInit() {
    this.updateCropSize(this.cropSizeList[0]);
  }

  public cropImage() {
    let bounds: ICropBounds = {
      x: this.bounds.left,
      y: this.bounds.top,
      width: this.bounds.width,
      height: this.bounds.height
    };

    this.onCrop.emit({file: this.file, bounds: bounds});
  }


  private getCropperSettings() {
    let cropperSettings = new CropperSettings();
    let scale = this.calculateScale();
    let width = scale * this.file.getWidth();
    let height = scale * this.file.getHeight();

    cropperSettings.noFileInput = true;
    cropperSettings.width = this.currentCropSize.width;
    cropperSettings.height = this.currentCropSize.height;
    cropperSettings.canvasWidth = width;
    cropperSettings.canvasHeight = height;

    return cropperSettings;
  }

  /**
   * Calculates scale between current file dimensions and box 600x600
   * @returns {number}
   */
  private calculateScale(): number {
    let scale = this.file.getWidth() / this.file.getHeight();

    if (scale > 1) {
      if (this.file.getWidth() > 600) {
        return 600 / this.file.getWidth();
      }
    } else {
      if (this.file.getHeight() > 600) {
        return 600 / this.file.getHeight();
      }
    }

    return 1;
  }
}
