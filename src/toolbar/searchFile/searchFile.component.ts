import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchFilterService} from '../../services/searchFilter.service';

@Component({
  selector: 'ri-search-file',
  templateUrl: './searchFile.component.html'
})

export class SearchFileComponent implements OnInit {

  public searchField = new FormControl();

  constructor(private searchFilterService: SearchFilterService) {
  }

  ngOnInit() {
    this.searchField.valueChanges
      .debounceTime(250)
      .subscribe((value: string) => this.searchFilterService.setValue(value));
  }
}
