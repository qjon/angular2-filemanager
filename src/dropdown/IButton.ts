export interface IButtonData {
  symbol: string;
  name: string;
  label: boolean;
  icon: boolean;
  iconCssClass: string;
  disabled?: boolean;
}

export interface IButton extends IButtonData {
  isDivider(): boolean;
}
