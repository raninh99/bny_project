import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-params',
  templateUrl: './submit-params.component.html',
  styleUrls: ['./submit-params.component.scss']
})
export class SubmitParamsComponent implements OnInit {

  @Input() public submitParams:any

  
  constructor() { }

  ngOnInit(): void {
  }

  // onChange(e:any, i:number){
  //   console.log(e.target.value, i);
  //   let temp = JSON.parse(JSON.stringify(this.submitParams)) ;
  //   temp[Object.keys(temp)[i]]=e.target.value;
  //   this.submitParams = temp;
  // }
}
