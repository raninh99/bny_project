import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialComponents = [
  MatGridListModule,
  MatButtonModule, 
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatFormFieldModule,
  MatTabsModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatExpansionModule,
  MatDialogModule
  
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
