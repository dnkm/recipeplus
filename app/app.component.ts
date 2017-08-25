import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application";

import { Parser } from './shared/parser/parser';
import { RecipeListService } from './shared/recipe-list.service';
import { Recipe } from './shared/recipe';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [Parser]
})
export class AppComponent {
    constructor(private parser: Parser, private recipeListService: RecipeListService) {
        app.on(app.launchEvent, (args: app.ApplicationEventData) => {
            let intent = args.android;
            if (intent) {
                let txt = intent.getStringExtra(android.content.Intent.EXTRA_TEXT);
                let parseObs = parser.parse(txt);
                if (parseObs) {
                    parseObs.subscribe(recipe => {
                        if (recipe) {
                            console.log("adding recipe to the DB");
                            console.dir(recipe);
                            this.recipeListService.addToMyRecipes(recipe);
                        } else {
                            console.log("not a valid recipe");
                        }
                    });
                }
            }
        })
    }
}


