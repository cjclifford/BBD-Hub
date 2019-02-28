import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MapComponent } from './map/map.component';
import { RequestViewComponent } from './request-view/request-view.component';

const routes: Routes = [
    { path: "", redirectTo: "/map", pathMatch: "full" },
    { path: 'map', component: MapComponent },
    { path: 'request-view', component: RequestViewComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
