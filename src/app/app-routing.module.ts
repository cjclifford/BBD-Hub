import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'login', component: HomepageComponent},
  {path: '/', redirectTo: '/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
