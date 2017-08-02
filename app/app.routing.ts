import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./pages/login/login.component";
import { MainmenuComponent } from "./pages/mainmenu/mainmenu.component";
import { DiscoverComponent } from "./pages/discover/discover.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "mainmenu", component: MainmenuComponent },
    { path: "discover", component: DiscoverComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

export const navigatableComponents = [
    ItemsComponent, ItemDetailComponent, LoginComponent, MainmenuComponent, DiscoverComponent
]