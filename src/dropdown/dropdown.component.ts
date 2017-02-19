import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IButton} from "./IButton";
@Component({
  selector: 'dropdown',
  styleUrls: ['./dropdown.less'],
  template: `
    <div class="btn-group dropdown" [ngClass]="{'open': isOpen}">
        <button class="btn btn-default" (click)="selectButton(mainButton)"  >
            <span *ngIf="mainButton.label">{{mainButton.name}}</span>
            <i *ngIf="mainButton.icon" class="{{mainButton.iconCssClass}}"></i>
        </button>
        <button class="btn btn-default dropdown-toggle" (click)="toggleOpen()">
            <span class="caret"></span>
            <span class="sr-only">Split button!</span>
        </button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="single-button" (mouseleave)="hide()">
            <!--<li class="divider"></li>-->
            <li role="menuitem" *ngFor="let button of buttons">
                <a (click)="selectButton(button)">
                    <span *ngIf="button.icon" class="{{button.iconCssClass}}"></span>
                    <span *ngIf="button.label">{{button.name}}</span>
                </a>
            </li>
        </ul>
    </div>`
})

export class Dropdown {
  @Input() mainButton: IButton;
  @Input() buttons: IButton[];

  @Output() onClick = new EventEmitter();

  public isOpen: boolean = false;

  public hide() {
    this.isOpen = false;
  }

  public selectButton(button: IButton) {
    this.hide();
    this.onClick.emit(button);
  }

  public toggleOpen() {
    this.isOpen = !this.isOpen;
  }


}
