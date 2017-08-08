import { Http, Headers, Response } from "@angular/http";
import { Injectable } from '@angular/core';

import { Observable as RxObservable } from "rxjs/Observable";
import { AllRecipesParser } from './allrecipes';

@Injectable()
export class Parser {
    constructor(private http: Http) { }

    parse(url: string): RxObservable<any> {
        if (!url || !url.startsWith('http')) {
            return null;
        }

        url = url.toLowerCase();

        if (url.indexOf('allrecipes') >= 0) {
            return this.http.get(url)
                .map( (data:Response) => new AllRecipesParser().parse(data.text()));

            //.map(data => new AllRecipesParser().parse(data));
        } else {
            return null;
        }
    }
}