import { OnInit, Component } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router';

import { Recipe } from "../../shared/recipe";
import { RecipeListService } from "../../shared/recipe-list.service";

import "rxjs/add/operator/switchMap";

@Component({
    moduleId: module.id,
    selector: "recipe",
    styleUrls: ["recipe-common.css"],
    templateUrl: "recipe.html"
})
export class RecipeComponent implements OnInit {
    recipe: Recipe;

    constructor(private recipeListService: RecipeListService, private pageRoute: PageRoute) {

        this.pageRoute.activatedRoute
            .switchMap(ar => ar.params)
            .forEach((params) => {
                let id = parseInt(params['id']);
                this.loadRecipe(id);
            });

        /*
        pageRoute.activatedRoute.subscribe(route => {
            console.log(route.params['id']);
            console.log("parsed");
            console.log(parseInt(route.params['id']));
            let id : number = parseInt(route.params['id']);
            this.loadRecipe(id);
        })
        */
    }

    loadRecipe(id: number) {
        console.log("loading " + id);
        this.recipeListService.getMyRecipes().then((recipes: Recipe[]) => this.recipe = recipes.find(r => r.id == id));
    }

    ngOnInit() {
        //this.recipeDB.getMyRecipes().then(recipes => this.myRecipes = recipes);

    }
}