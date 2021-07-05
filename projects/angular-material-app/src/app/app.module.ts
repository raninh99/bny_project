import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterComponent } from './filter/filter.component';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilterReportsComponent } from './filter-reports/filter-reports.component';
import { FilterService } from './filter.service';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    NavBarComponent,
    FilterReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    

  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
