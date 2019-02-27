import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestViewComponent } from './request-view/request-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/map', pathMatch: 'full'},
  {path: 'map', component: MapComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'request-view', component: RequestViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
