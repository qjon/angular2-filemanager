import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {IButton, IButtonData} from '../../dropdown/IButton';
import {ButtonClass} from '../../dropdown/Button.class';
import {Button} from '../models/button.model';
import {ButtonDividerClass} from '../../dropdown/ButtonDivider.class';
import {FileManagerActionsService} from '../../store/fileManagerActions.service';
import {FileModel} from '../../filesList/file.model';
import {CurrentDirectoryFilesService} from '../../services/currentDirectoryFiles.service';
import {Subscription} from 'rxjs/Subscription';
import {Actions} from '@ngrx/effects';
import {FileManagerConfiguration} from '../../configuration/fileManagerConfiguration.service';
import {IToolbarEvent} from '../interface/IToolbarEvent';
import {ToolbarEventModel} from '../models/toolbarEvent.model';

@Component({
  selector: 'ri-selection-dropdown',
  templateUrl: './selection.dropdown.html'
})
export class SelectionComponent implements OnDestroy {
  @Input() selectedFiles: string[];
  @Output() onMenuButtonClick = new EventEmitter();

  public selectButtonsList: IButton[];

  public selectAllButton = new ButtonClass({
    symbol: Button.SELECT_ALL,
    name: 'Select all',
    label: true,
    icon: true,
    iconCssClass: 'fa fa-check-square-o'
  });

  private unselectAllButton = new ButtonClass({
    symbol: Button.UNSELECT_ALL,
    name: 'Unselect all',
    label: true,
    icon: true,
    iconCssClass: 'fa fa-square-o'
  });

  private inverseSelectionButton = new ButtonClass({
    symbol: Button.INVERSE_SELECTION,
    name: 'Inverse selection',
    label: true,
    icon: true,
    iconCssClass: 'fa fa-check-square'
  });

  private deleteSelectionButton = new ButtonClass({
    symbol: Button.DELETE_SELECTION,
    name: 'Delete selection',
    label: true,
    icon: true,
    iconCssClass: 'fa fa-trash'
  });

  private onLoadFilesSubscriber: Subscription;

  public constructor(public configuration: FileManagerConfiguration,
                     private actions$: Actions,
                     private currentDirectoryFilesService: CurrentDirectoryFilesService) {

    this.selectButtonsList = this.createBasicButtons();

    this.initListenOnLoadFiles();
  }

  public ngOnDestroy() {
    this.onLoadFilesSubscriber.unsubscribe();
  }

  /**
   * Initialize listener on load files
   */
  public initListenOnLoadFiles() {
    this.onLoadFilesSubscriber = this.actions$
      .ofType(
        FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS,
        FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION,
        FileManagerActionsService.FILEMANAGER_SELECT_ALL,
        FileManagerActionsService.FILEMANAGER_SELECT_FILE,
        FileManagerActionsService.FILEMANAGER_UNSELECT_ALL,
        FileManagerActionsService.FILEMANAGER_UNSELECT_FILE,
        FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
      )
      .switchMap((data: any) => this.currentDirectoryFilesService.filteredFiles$)
      .distinctUntilChanged()
      .subscribe((files: FileModel[]) => {
        // todo: figure out, why this subscriber is called two times
        const selectedFiles = files.filter((file: FileModel) => file.selected);

        this.disableAllButtons();

        if (files.length > 0) {
          if (selectedFiles.length > 0) {
            this.enableAllButtons();
          } else {
            this.enableSelectAllButton();
          }
        }
      });
  }


  public onSelectDropdownClick(button: IButtonData) {
    let event: IToolbarEvent = new ToolbarEventModel(button.symbol);
    this.onMenuButtonClick.emit(event);
  }

  /**
   * Disable all dropdown buttons and main button
   */
  private disableAllButtons(): void {
    this.selectAllButton.disabled = true;

    this.selectButtonsList
      .filter((button: IButton) => {
        return !button.isDivider();
      })
      .forEach((button: IButtonData) => {
        button.disabled = true;
      });
  }

  /**
   * Enable all dropdown buttons and main button
   */
  private enableAllButtons(): void {
    this.selectAllButton.disabled = false;

    this.selectButtonsList
      .forEach((button: IButtonData) => {
        button.disabled = false;
      });
  }

  /**
   * Create list of buttons
   * @returns {IButton[]}
   */
  private createBasicButtons(): IButton[] {
    return [
      this.selectAllButton,
      this.unselectAllButton,
      this.inverseSelectionButton,
      new ButtonDividerClass(),
      this.deleteSelectionButton
    ];
  }

  /**
   * Enable only select button
   */
  private enableSelectAllButton(): void {
    this.selectAllButton.disabled = false;
    this.inverseSelectionButton.disabled = false;
  }
}
