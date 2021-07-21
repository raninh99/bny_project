import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-dialog',
  templateUrl: './tab-dialog.component.html',
  styleUrls: ['./tab-dialog.component.scss']
})
export class TabDialogComponent implements OnInit {

  public actionConfig=[
    {
      "id":"approve",
      "label":"Return",
      "actionCd":"RT",
      "hasDialog":true,
      "submitUrl":"/cwf/wfapproval/v1/updateWork/approve",
      "submitParams":[
        {
          "name":"processTemplateName",
          "value":"CRPVOLT_VCOR_EXVC"
        },
        {
          "name":"processTemplateName",
          "value":"CRPVOLT_VCOR_EXVC"
        },
        {
          "name":"processTemplateName",
          "value":"CRPVOLT_VCOR_EXVC"
        }
      ]
      
    },
    
    {
      "id":"approvq",
      "label":"Returq",
      "actionCd":"Rq",
      "hasDialog":true,
      "submitUrl":"/cwq/wfapproval/v1/updateWork/approve",
      "submitParams":[
        {
          "name":"bundleActionType",
          "value":"RT"

        }
      ]
      
    }
    
  ]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
