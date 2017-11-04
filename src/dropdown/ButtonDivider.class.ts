import {AbstractButtonClass} from './AbstractButton.class';

export class ButtonDividerClass extends AbstractButtonClass {
  public constructor() {
    super({
      symbol: '',
      name: '',
      label: false,
      icon: false,
      iconCssClass: ''
    })
  }

  public isDivider(): boolean {
    return true;
  }
}
