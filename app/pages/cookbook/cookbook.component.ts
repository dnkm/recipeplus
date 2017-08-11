import { OnInit, Component } from '@angular/core';
import { Page } from "ui/page";

import { Recipe } from "../../shared/recipe";
import { RecipeListService } from "../../shared/recipe-list.service";

@Component({
    moduleId: module.id,
    selector: "cookbook",
    styleUrls: ["cookbook-common.css"],
    templateUrl: "cookbook.html"
})
export class CookbookComponent implements OnInit {
    constructor(private page: Page, private recipeListService: RecipeListService) { 
    }

    myRecipes: Recipe[];

    ngOnInit() {
        this.recipeListService.getMyRecipes().then(recipes => this.myRecipes = recipes);
    }
}