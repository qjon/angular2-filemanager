import {DropdownComponent} from './dropdown.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {ButtonClass} from './Button.class';
import {IButton} from './IButton';
import {ButtonDividerClass} from './ButtonDivider.class';
import {By} from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';

describe('dropdown.component', () => {
  let comp: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let de: DebugElement;
  let dropdownElement: HTMLElement;
  let mainButton: ButtonClass;
  let buttons: IButton[];
  let onClickHandler: Function;

  beforeEach(() => {
    mainButton = new ButtonClass({
      symbol: 'SELECT_ALL',
      name: 'Select all',
      label: true,
      icon: true,
      iconCssClass: 'fa fa-check-square-o',
      disabled: false
    });

    buttons = [mainButton, new ButtonDividerClass()];

    onClickHandler = jasmine.createSpy('onClickHandler');

    TestBed.configureTestingModule({
      imports: [TranslateModule],
      declarations: [DropdownComponent], // declare the test component
    });

    fixture = TestBed.createComponent(DropdownComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    comp.mainButton = mainButton;
    comp.buttons = buttons;
    comp.displayMainButtonLabel = false;

    comp.onClick
      .subscribe(onClickHandler);

    fixture.detectChanges();
  });

  describe('view', () => {
    it('mainButton should not have label', () => {
      const mainEl = fixture.debugElement.query(By.css('.dropdown'));
      const mainButtonEl = mainEl.children[0];

      expect(mainButtonEl.children.length).toBe(1);
    });

    it('mainButton should have label', () => {
      comp.displayMainButtonLabel = true;
      fixture.detectChanges();

      const mainEl = fixture.debugElement.query(By.css('.dropdown'));
      const mainButtonEl = mainEl.children[0];

      expect(mainButtonEl.children.length).toBe(2);
    });

    it('dropdown should contains two children', () => {
      const dropDownHtml = fixture.debugElement.query(By.css('.dropdown-menu')).nativeElement;

      expect(dropDownHtml.children.length).toBe(2);
    });
  });


  describe('isOpen', () => {
    it('should be set to false', () => {
      expect(comp.isOpen).toBe(false);
    });
  });

  describe('hide', () => {
    it('it should set isOpen to false', () => {
      comp.isOpen = true;

      comp.hide();

      expect(comp.isOpen).toBe(false);
    });
  });

  describe('selectButton', () => {
    it('should hide menu and emit onClick', () => {
      comp.isOpen = true;

      comp.selectButton(mainButton);

      expect(comp.isOpen).toBe(false);
      expect(onClickHandler).toHaveBeenCalledWith(mainButton);
    });
  });

  describe('toggleOpen', () => {
    it('should change is Open to true', () => {
      comp.toggleOpen();

      expect(comp.isOpen).toBe(true);
    });

    it('should add "open" css class to element', () => {
      comp.toggleOpen();
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('.dropdown'));
      dropdownElement = de.nativeElement;

      expect(dropdownElement.className.indexOf('open') > -1).toBe(true);
    });

    it('should change is Open to true', () => {
      comp.toggleOpen();
      expect(comp.isOpen).toBe(true);

      comp.toggleOpen();
      expect(comp.isOpen).toBe(false);
    });

    it('should add "open" css class to element', () => {
      comp.toggleOpen();
      fixture.detectChanges();
      comp.toggleOpen();
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('.dropdown'));
      dropdownElement = de.nativeElement;

      expect(dropdownElement.className.indexOf('open') > -1).toBe(false);
    });
  });

});
