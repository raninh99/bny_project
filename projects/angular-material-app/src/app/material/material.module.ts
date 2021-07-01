import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatGridListModule,
  MatButtonModule, 
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatFormFieldModule
];

@NgModule({
  
  imports:[
    MaterialComponents  
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
