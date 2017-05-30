import {Component, Input, OnInit} from '@angular/core';
import {IFileTypeFilter} from '../interface/IFileTypeFilter';
import {FileTypeFilterService} from '../../services/fileTypeFilter.service';

@Component({
  selector: 'ri-file-type-filter',
  templateUrl: './fileTypeFilter.component.html'
})

export class FileTypeFilterComponent implements OnInit {
  @Input() typeFilterList: IFileTypeFilter[] = [];

  public selectedType: IFileTypeFilter = null;

  constructor(private fileTypeFilter: FileTypeFilterService) {
    this.fileTypeFilter.filter$
      .subscribe((type: IFileTypeFilter | null) => {
        this.selectedType = type;
      })
  }

  ngOnInit() {
    /** init file type filter **/
    this.typeFilterList
      .filter((type: IFileTypeFilter) => {
        return type.defaultSelected;
      })
      .forEach((type: IFileTypeFilter) => {
        this.fileTypeFilter.setValue(type);
      });
  }

  /**
   * Set current filter and fire event
   * @param type
   */
  public setFilterType(type: IFileTypeFilter) {
    this.fileTypeFilter.setValue(type);
  }
}
