import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/tab-components/dashboard/dashboard.component';
import { PocComponent } from '../app/tab-components/poc/poc.component';
import { CustomerComponent } from '../app/tab-components/customer/customer.component';
import { TasComponent } from '../app/tab-components/tas/tas.component';
import { WasComponent } from '../app/tab-components/was/was.component';
import { LeftPanelComponent } from '../app/panel-components/left.panel.component';
import { RightPanelComponent } from '../app/panel-components/right.panel.component';
import { HeaderPanelComponent } from '../app/panel-components/header.panel.component';

const routes: Routes = [
  
  { path:'dashboard',component:DashboardComponent},
  { path:'poc',component:PocComponent},
  { path:'customer',component:CustomerComponent},
  { path:'tas',component:TasComponent},
  { path:'was',component:WasComponent},
  { path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path:'**',redirectTo:'login',pathMatch:'full'},
  { path:'poc',redirectTo:'poc',pathMatch:'full'},
  { path:'customer',redirectTo:'customer',pathMatch:'full'},
  { path:'tas',redirectTo:'tas',pathMatch:'full'},
  { path:'was',redirectTo:'was',pathMatch:'full'}
  // {
  //   path: '',
  //   children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}