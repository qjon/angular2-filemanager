import {IButton, IButtonData} from './IButton';

export abstract class AbstractButtonClass implements IButton {
  public symbol: string;
  public name: string;
  public label: boolean;
  public icon: boolean;
  public iconCssClass: string;
  public disabled?: boolean;

  public constructor(data: IButtonData) {
    this.symbol = data.symbol;
    this.name = data.name;
    this.label = data.label;
    this.icon = data.icon;
    this.iconCssClass = data.iconCssClass;
    this.disabled = data.disabled;
  }

  abstract isDivider(): boolean;
}
