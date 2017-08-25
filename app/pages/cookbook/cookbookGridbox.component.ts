import { OnInit, Component, Input } from '@angular/core';
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

    constructor() {
    }


    ngOnInit() {
    }
}