import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IButton} from './IButton';

@Component({
  selector: 'ri-dropdown',
  styleUrls: ['./dropdown.less'],
  templateUrl: './dropdown.html'
})

export class DropdownComponent {
  @Input() mainButton: IButton;
  @Input() buttons: IButton[];

  @Output() onClick = new EventEmitter();

  public isOpen = false;

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
