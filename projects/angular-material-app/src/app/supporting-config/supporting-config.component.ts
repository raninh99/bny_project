import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supporting-config',
  templateUrl: './supporting-config.component.html',
  styleUrls: ['./supporting-config.component.scss']
})
export class SupportingConfigComponent implements OnInit {
  public foods=['apple', 'mango', 'grapes'];
  constructor() { }

  ngOnInit(): void {
  }

}
