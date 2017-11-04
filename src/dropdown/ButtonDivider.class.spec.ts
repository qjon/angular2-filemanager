import {ButtonDividerClass} from './ButtonDivider.class';

describe('ButtonDivider.class', () => {
  let button: ButtonDividerClass;

  beforeEach(() => {
    button = new ButtonDividerClass();
  });

  describe('isDivider', () => {
    it('should return always true', () => {
      expect(button.isDivider()).toBe(true);
    });
  });
});
