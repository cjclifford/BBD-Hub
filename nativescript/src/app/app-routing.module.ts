import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MapComponent } from './map/map.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { RequestFormComponent } from './request-form/request-form.component';

const routes: Routes = [
    { path: "", redirectTo: "/map", pathMatch: "full" },
    { path: 'map', component: MapComponent },
    { path: 'request-view/:id', component: RequestViewComponent },
    { path: 'request-form/:id', component: RequestFormComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
