import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { NativeScriptUIListViewModule } from 'nativescript-telerik-ui/listview/angular';

import { AppRoutingModule, navigatableComponents } from "./app.routing";
import { AppComponent } from "./app.component";

import { IconPipe } from "./pipes/iconPipe";



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptRouterModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        IconPipe,
        ...navigatableComponents
    ],
    providers: [
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
