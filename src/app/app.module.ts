import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestViewComponent } from './request-view/request-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RequestFormComponent,
    RequestViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
