import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-config',
  templateUrl: './child-config.component.html',
  styleUrls: ['./child-config.component.scss']
})
export class ChildConfigComponent implements OnInit {


  public configJson:any = {
    "name": "CRPVOLT_VCOR_EXVC",
    "bundleActionType": "SA",
    "bundleCommentType": "p"
  }
  public w_name:string='name';
  public tempForm = new FormGroup({
    name : new FormControl(this.configJson.name)
  });

  constructor() { }

  ngOnInit(): void {

  }

  onclick(e:any, k:any){
    this.configJson[k]=e.target.value;
    console.log("main json : ",this.configJson)
    console.log("changed json: ",e.target.value)
  }

  


}
