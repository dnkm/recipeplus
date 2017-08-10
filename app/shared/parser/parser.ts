import { Http, Headers, Response } from "@angular/http";
import { Injectable } from '@angular/core';

import { Observable as RxObservable } from "rxjs/Observable";
import { AllRecipesParser } from './allrecipes';

import { Recipe } from '../recipe';

@Injectable()
export class Parser {
    constructor(private http: Http) { }

    parse(url: string): RxObservable<Recipe> {
        if (!url || !url.startsWith('http')) {
            return null;
        }

        url = url.toLowerCase();

        if (url.indexOf('allrecipes') >= 0) {
            return this.http.get(url)
                .map((data: Response) => new AllRecipesParser().parse(data.text()))
                .map((recipe: Recipe) => {
                    recipe.url = url;
                    return recipe;
                })
        } else {
            return null;
        }
    }
}