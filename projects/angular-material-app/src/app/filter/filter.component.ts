import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  constructor() { }

  public foods = ['apple', 'orange','pear','grapes'];
  ngOnInit(): void {
  }

}
