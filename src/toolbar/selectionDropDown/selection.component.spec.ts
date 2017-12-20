import {SelectionComponent} from './selection.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {ButtonClass} from '../../dropdown/Button.class';
import {Button} from '../models/button.model';
import {ButtonDividerClass} from '../../dropdown/ButtonDivider.class';
import {CurrentDirectoryFilesService} from '../../services/currentDirectoryFiles.service';
import {Observable} from 'rxjs/Observable';
import {DropdownComponent} from '../../dropdown/dropdown.component';
import {FileManagerConfiguration} from '../../configuration/fileManagerConfiguration.service';
import {filesData} from '../../../_unitTestMocks/fileDataMock';
import {ToolbarEventModel} from '../models/toolbarEvent.model';
import {TranslateModule} from 'ng2-translate';

describe('selection.component', () => {
  let comp: SelectionComponent
  let fixture: ComponentFixture<SelectionComponent>;
  let de: DebugElement;
  let selectionElement: HTMLElement;
  let onMenuButtonClick: any;
  let selectAllButton: ButtonClass;
  let unselectAllButton: ButtonClass;
  let inverseSelectionButton: ButtonClass;
  let deleteSelectionButton: ButtonClass;
  let currentDirectoryFilesServiceStub: any;
  let fileManagerConfigurationStub: any;

  beforeEach(() => {
    onMenuButtonClick = jasmine.createSpyObj('onClickHandler', ['emit']);

    currentDirectoryFilesServiceStub = <CurrentDirectoryFilesService>{};

    fileManagerConfigurationStub = {};

    selectAllButton = new ButtonClass({
      symbol: Button.SELECT_ALL,
      name: 'RI_FM_LBL_SELECT_ALL',
      label: true,
      icon: true,
      iconCssClass: 'fa fa-check-square-o'
    });

    unselectAllButton = new ButtonClass({
      symbol: Button.UNSELECT_ALL,
      name: 'RI_FM_LBL_UNSELECT_ALL',
      label: true,
      icon: true,
      iconCssClass: 'fa fa-square-o'
    });

    inverseSelectionButton = new ButtonClass({
      symbol: Button.INVERSE_SELECTION,
      name: 'RI_FM_LBL_INVERSE_SELECTION',
      label: true,
      icon: true,
      iconCssClass: 'fa fa-check-square'
    });

    deleteSelectionButton = new ButtonClass({
      symbol: Button.DELETE_SELECTION,
      name: 'RI_FM_LBL_DELETE_SELECTION',
      label: true,
      icon: true,
      iconCssClass: 'fa fa-trash'
    });

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [SelectionComponent, DropdownComponent],
      providers: [
        {provide: CurrentDirectoryFilesService, useValue: currentDirectoryFilesServiceStub},
        {provide: FileManagerConfiguration, useValue: fileManagerConfigurationStub}
      ]
    });


  });

  afterEach(() => {
    fixture.detectChanges();
  })

  describe('listen on selection change', () => {

    afterEach(() => {
      comp.onMenuButtonClick
        .subscribe(onMenuButtonClick);
    })

    it('should fill selectedButtonsList and mark all buttons as disabled because file list is empty', () => {
      currentDirectoryFilesServiceStub.selectedFiles$ = Observable.of([]);
      currentDirectoryFilesServiceStub.currentDirectoryFileIds$ = Observable.of([]);
      fixture = TestBed.createComponent(SelectionComponent);
      comp = fixture.componentInstance;

      selectAllButton.disabled = true;
      unselectAllButton.disabled = true;
      inverseSelectionButton.disabled = true;
      deleteSelectionButton.disabled = true;

      expect(comp.selectButtonsList).toEqual([
        selectAllButton,
        unselectAllButton,
        inverseSelectionButton,
        new ButtonDividerClass(),
        deleteSelectionButton
      ])
    });

    it('should fill selectedButtonsList and mark buttons select all and inverse as enabled', () => {
      currentDirectoryFilesServiceStub.selectedFiles$ = Observable.of([]);
      currentDirectoryFilesServiceStub.currentDirectoryFileIds$ = Observable.of([filesData[0].id]);
      fixture = TestBed.createComponent(SelectionComponent);
      comp = fixture.componentInstance;

      selectAllButton.disabled = false;
      unselectAllButton.disabled = true;
      inverseSelectionButton.disabled = false;
      deleteSelectionButton.disabled = true;

      expect(comp.selectButtonsList).toEqual([
        selectAllButton,
        unselectAllButton,
        inverseSelectionButton,
        new ButtonDividerClass(),
        deleteSelectionButton
      ])
    });

    it('should fill selectedButtonsList and mark all buttons as enabled', () => {
      const buttonDivider = new ButtonDividerClass();
      currentDirectoryFilesServiceStub.selectedFiles$ = Observable.of([filesData[0].id]);
      currentDirectoryFilesServiceStub.currentDirectoryFileIds$ = Observable.of([filesData[0].id]);
      fixture = TestBed.createComponent(SelectionComponent);
      comp = fixture.componentInstance;

      selectAllButton.disabled = false;
      unselectAllButton.disabled = false;
      inverseSelectionButton.disabled = false;
      deleteSelectionButton.disabled = false;
      buttonDivider.disabled = false;

      expect(comp.selectButtonsList).toEqual([
        selectAllButton,
        unselectAllButton,
        inverseSelectionButton,
        buttonDivider,
        deleteSelectionButton
      ])
    });
  });

  describe('onSelectDropdownClick', () => {
    it('should emit new value for onMenuButtonClick listener', () => {
      currentDirectoryFilesServiceStub.selectedFiles$ = Observable.of([]);
      currentDirectoryFilesServiceStub.currentDirectoryFileIds$ = Observable.of([]);
      fixture = TestBed.createComponent(SelectionComponent);
      comp = fixture.componentInstance;

      comp.onMenuButtonClick = onMenuButtonClick;

      comp.onSelectDropdownClick(selectAllButton);

      expect(onMenuButtonClick.emit).toHaveBeenCalledWith(new ToolbarEventModel('SELECT_ALL'));
    });
  });

});
