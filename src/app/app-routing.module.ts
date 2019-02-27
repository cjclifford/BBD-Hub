import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RequestFormComponent } from './request-form/request-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/map', pathMatch: 'full'},
  {path: 'map', component: MapComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'login/User', component: SignInComponent},
  {path: 'request-view/:id', component: RequestViewComponent},
  {path: 'request-form', component: RequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
