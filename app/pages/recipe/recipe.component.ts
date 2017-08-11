import { OnInit, Component } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router';

import { Recipe } from "../../shared/recipe";
import { RecipeListService } from "../../shared/recipe-list.service";

@Component({
    moduleId: module.id,
    selector: "recipe",
    styleUrls: ["recipe-common.css"],
    templateUrl: "recipe.html"
})
export class RecipeComponent implements OnInit {
    recipe: Recipe;

    constructor(private recipeListService: RecipeListService, private pageRoute: PageRoute) {
        pageRoute.activatedRoute.subscribe(route => {
            let id : number = parseInt(route.params['id']);
            this.loadRecipe(id);
        })
    }

    loadRecipe(id: number) {
        this.recipeListService.getMyRecipes().then((recipes: Recipe[]) => this.recipe = recipes[id]);
    }

    ngOnInit() {
        //this.recipeDB.getMyRecipes().then(recipes => this.myRecipes = recipes);

    }
}