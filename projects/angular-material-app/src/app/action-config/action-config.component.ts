import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-action-config',
  templateUrl: './action-config.component.html',
  styleUrls: ['./action-config.component.scss']
})
export class ActionConfigComponent implements OnInit {

  public extraAdded: number = 0;

  @Input() public actionConfig: any
  constructor() { }

  onAddButtonClick() {
    this.actionConfig.push(
      {
        "id": "",
        "label": "",
        "actionCd": "",
        "hasDialog": false,
        "submitUrl": ""
      }
    )
    this.extraAdded++;
    console.log("rani", this.actionConfig);
  }
  onDeleteButtonClick() {
    console.log("isExtra", this.extraAdded)
    if (this.extraAdded) {
      this.actionConfig.pop();
      this.extraAdded--;
    }

  }


  ngOnInit(): void {

  }

  // func(event:any, i:number){
  //   console.log("capture_parent", i)
  //   this.actionConfig[i]=event;
  // }



}
