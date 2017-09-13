import { OnInit, Component, Input } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

import { Recipe } from '../../shared/recipe';

@Component({
    moduleId: module.id,
    selector: "CookbookGridbox",
    styleUrls: ["cookbookGridbox-common.css"],
    templateUrl: "cookbookGridbox.html"
})
export class CookbookGridboxComponent implements OnInit {

    @Input()
    recipe: Recipe;

    @Input()
    doSpan: Boolean;

    constructor(private routerExtensions: RouterExtensions) {
    }


    ngOnInit() {
    }

    viewDetail() {
        if (this.recipe) {
            this.routerExtensions.navigate(["/cookbook/"+this.recipe.id]);
        }
    }
}