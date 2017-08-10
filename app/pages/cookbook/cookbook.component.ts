import { OnInit, Component } from '@angular/core';
import { Page } from "ui/page";

import { Recipe } from "../../shared/recipe";
import { RecipeDB } from "../../shared/dao/recipeDB";

@Component({
    moduleId: module.id,
    selector: "cookbook",
    styleUrls: ["cookbook-common.css"],
    templateUrl: "cookbook.html"
})
export class CookbookComponent implements OnInit {
    constructor(private page: Page, private recipeDB: RecipeDB) { 
    }

    myRecipes: Recipe[];

    ngOnInit() {
        this.recipeDB.getMyRecipes().then(recipes => this.myRecipes = recipes);
    }
}