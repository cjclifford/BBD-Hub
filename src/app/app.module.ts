import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RequestFormComponent,
    HomepageComponent,
    RequestViewComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [HomepageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
