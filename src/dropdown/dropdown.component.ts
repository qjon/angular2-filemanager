import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IButtonData} from './IButton';

@Component({
  selector: 'ri-dropdown',
  styleUrls: ['./dropdown.less'],
  templateUrl: './dropdown.html'
})

export class DropdownComponent {
  @Input() mainButton: IButtonData;
  @Input() buttons: IButtonData[];
  @Input() displayMainButtonLabel: boolean;

  @Output() onClick = new EventEmitter();

  public isOpen = false;

  public hide(): void {
    this.isOpen = false;
  }

  public selectButton(button: IButtonData): void {
    this.hide();
    this.onClick.emit(button);
  }

  public toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
