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
import { GridComponent } from './grid/grid.component';
import { ActionConfigComponent } from './action-config/action-config.component';
import { SupportingConfigComponent } from './supporting-config/supporting-config.component';
import { ChildActionConfigComponent } from './child-action-config/child-action-config.component';
import { FormsModule } from '@angular/forms';
import { ConfigMainComponent } from './config-main/config-main.component';
import { TabDialogComponent } from './tab-dialog/tab-dialog.component';
import { ComplexJsonComponent } from './complex-json/complex-json.component';
import { SubmitParamsComponent } from './submit-params/submit-params.component';
import { ParentConfigComponent } from './parent-config/parent-config.component';
import { ChildConfigComponent } from './child-config/child-config.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    NavBarComponent,
    FilterReportsComponent,
    GridComponent,
    ActionConfigComponent,
    SupportingConfigComponent,
    ChildActionConfigComponent,
    ConfigMainComponent,
    TabDialogComponent,
    ComplexJsonComponent,
    SubmitParamsComponent,
    ParentConfigComponent,
    ChildConfigComponent
  ],
  entryComponents: [
    TabDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
