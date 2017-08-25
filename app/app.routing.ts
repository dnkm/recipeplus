import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { MainmenuComponent } from "./pages/mainmenu/mainmenu.component";
import { DiscoverComponent } from "./pages/discover/discover.component";
import { CookbookComponent } from "./pages/cookbook/cookbook.component";
import { CookbookGridboxComponent } from "./pages/cookbook/cookbookGridbox.component";
import { RecipeComponent } from "./pages/recipe/recipe.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "mainmenu", component: MainmenuComponent },
    { path: "discover", component: DiscoverComponent },
    { path: "cookbook", component: CookbookComponent },
    { path: "recipe/:id", component: RecipeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

export const navigatableComponents = [
    LoginComponent, MainmenuComponent, DiscoverComponent, CookbookComponent, RecipeComponent,
    CookbookGridboxComponent
]