
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-action-config',
  templateUrl: './child-action-config.component.html',
  styleUrls: ['./child-action-config.component.scss']
})
export class ChildActionConfigComponent implements OnInit {

 
  // @Input() public item:any;
  @Input() public item:any;

  public extraAdded: number = 0;


  // @Output() public itemChange= new EventEmitter();

  // onChange(event:any){
  //   console.log("in child", event.target.value,this.item.id);
  //   // this.itemChange.emit(event.target.value);
  // }

  

  

  
  constructor() { }
  onAddButtonClick() {
    this.item.submitParams.push(
      {
        "name": "",
        "value": "",
        
      }
    )
    this.extraAdded++;
    console.log("rani", this.item.submitParams);
  }
  onDeleteButtonClick() {
    console.log("isExtra", this.extraAdded)
    if (this.extraAdded) {
      this.item.submitParams.pop();
      this.extraAdded--;
    }

  }

  ngOnInit(): void {
    
  }
  
}
