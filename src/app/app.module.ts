import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeftPanelComponent } from '../app/panel-components/left.panel.component';
import { RightPanelComponent } from '../app/panel-components/right.panel.component';
import { HeaderPanelComponent } from '../app/panel-components/header.panel.component';
import {AppRoutingModule} from '../app/app-routing.modules';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {DashboardComponent} from '../app/tab-components/dashboard/dashboard.component';
import {PocComponent} from '../app/tab-components/poc/poc.component';
import {CustomerComponent} from '../app/tab-components/customer/customer.component';
import { TasComponent } from '../app/tab-components/tas/tas.component';
import { WasComponent } from '../app/tab-components/was/was.component';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    HeaderPanelComponent,
    DashboardComponent,
    PocComponent,
    CustomerComponent,
    TasComponent,
    WasComponent
  //  MaterialModule.forRoot()
  ],
  
  imports: [
    BrowserModule,NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
