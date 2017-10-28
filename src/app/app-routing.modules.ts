import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/tab-components/dashboard/dashboard.component';
import { LeftPanelComponent } from '../app/panel-components/left.panel.component';
import { RightPanelComponent } from '../app/panel-components/right.panel.component';
import { HeaderPanelComponent } from '../app/panel-components/header.panel.component';

const routes: Routes = [
  
  { path:'dashboard',component:DashboardComponent},
  { path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path:'**',redirectTo:'login',pathMatch:'full'}
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