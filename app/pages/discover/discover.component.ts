import { OnInit, Component } from '@angular/core';
import { Page } from "ui/page";

import { RecipeListService } from '../../shared/recipe-list.service';
import { Recipe } from '../../shared/recipe';

@Component({
    moduleId: module.id,
    selector: "discover",
    styleUrls: ["discover-common.css"],
    templateUrl: "discover.html",
    providers: [RecipeListService]
})
export class DiscoverComponent implements OnInit {

    recipes: Array<Recipe>;
    pageNum: number = 1;
    viewModeLinear: boolean = true;

    constructor(private page: Page, private recipeService: RecipeListService) { }

    ngOnInit() {
        this.recipes = []
        this.loadMoreRecipes();
    }

    loadMoreRecipes() {
        // this.recipeService.load(this.pageNum++).subscribe(loadedList => {
        //     this.recipes = this.recipes.concat(loadedList);
        // });
    }
}