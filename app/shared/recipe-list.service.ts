import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

const recipeStorage = [];

@Injectable()
export class RecipeListService {
    // discover

    load(page: number = 1): Observable<Recipe[]> {
        let fake: Recipe[] = [
            
        ]

        return Observable.create(o => {
            o.next(fake);
        })
    }
}