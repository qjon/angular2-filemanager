import {IButton, IButtonData} from './IButton';
import {ButtonClass} from './Button.class';

describe('Button.class', () => {
  let button: IButton;
  let buttonData: IButtonData;

  beforeEach(() => {
    buttonData = {
      symbol: 'SELECT_ALL',
      name: 'Select all',
      label: true,
      icon: true,
      iconCssClass: 'fa fa-check-square-o',
      disabled: false
    };

    button = new ButtonClass(buttonData);
  });

  describe('constructor', () => {
    it('should set property symbol', () => {
      expect(button.symbol).toBe(buttonData.symbol);
    });

    it('should set property name', () => {
      expect(button.name).toBe(buttonData.name);
    });

    it('should set property label', () => {
      expect(button.label).toBe(buttonData.label);
    });

    it('should set property icon', () => {
      expect(button.icon).toBe(buttonData.icon);
    });

    it('should set property iconCssClass', () => {
      expect(button.iconCssClass).toBe(buttonData.iconCssClass);
    });

    it('should set property disabled', () => {
      expect(button.disabled).toBe(buttonData.disabled);
    });
  });

  describe('isDivider', () => {
    it('should return false', () => {
      expect(button.isDivider()).toBe(false);
    });
  });


});
