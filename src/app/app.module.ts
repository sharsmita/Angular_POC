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

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    HeaderPanelComponent,
    DashboardComponent

  //  MaterialModule.forRoot()
  ],
  
  imports: [
    BrowserModule,NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
