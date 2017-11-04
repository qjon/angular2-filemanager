import {AbstractButtonClass} from './AbstractButton.class';

export class ButtonClass extends AbstractButtonClass {
  public isDivider(): boolean {
    return false;
  }
}
