import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-json',
  templateUrl: './complex-json.component.html',
  styleUrls: ['./complex-json.component.scss']
})
export class ComplexJsonComponent implements OnInit {

  @Input() public actionConfig:any
  
  constructor() { }

  ngOnInit(): void {
  }

}
