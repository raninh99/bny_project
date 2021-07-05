import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter-reports',
  templateUrl: './filter-reports.component.html',
  styleUrls: ['./filter-reports.component.scss']
})
export class FilterReportsComponent implements OnInit {

  
  public foods :string[] = [ ];
  constructor(private _filterService: FilterService) {}
  ngOnInit(): void {
    this.foods = this._filterService.getFoods();
  }

}
