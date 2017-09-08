import { OnInit, Component } from '@angular/core';
import { Page } from "ui/page";
import { SegmentedBarItem } from 'ui/segmented-bar';
import * as platformModule from "tns-core-modules/platform";

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
        this.mainScreen = platformModule.screen.mainScreen;
        
    }

    myRecipes: Recipe[] = [];
    allTags: String[] = [];
    selectedTag: number = 0;
    mainScreen: platformModule.ScreenMetrics;

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.allTags = Recipe.allTags;
        this.myRecipes = [];
        this.recipeListService.getMyRecipes().then(recipes => {
            /*
            for (let i = 0; i < recipes.length; i++) {
                let ar = []
                ar.push(recipes[i]);
                if (i % 3 == 0 && i < recipes.length - 1) {
                    ar.push(recipes[i + 1]);
                    i++;
                }
                this.myRecipes.push(ar);
            }*/
            this.myRecipes = recipes;
        });
    }

    selectTag(i) {
        this.selectedTag = i;
    }
}