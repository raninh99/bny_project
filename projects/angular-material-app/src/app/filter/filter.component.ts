import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  public foods :string[] = [ ];
  constructor(private _filterService: FilterService) {}
  ngOnInit(): void {
    this.foods = this._filterService.getFoods();
  }


}
