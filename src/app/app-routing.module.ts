import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { RequestViewComponent } from './request-view/request-view.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'request-view', component: RequestViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
