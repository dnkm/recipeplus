import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable()
export class RecipeListService {
    // discover

    load(page: number = 1): Observable<Recipe[]> {
        let fake: Recipe[] = [
            new Recipe("Chicken Salad", "Michael Adams", "https://www.friendlys.com/wp-content/themes/netplus/img/production/detail/menu/lunch-dinner_soups-salads_crispy-chicken-salad.jpg"),
            new Recipe("Egg Casserole", "Dennis Rodman", "http://clv.h-cdn.co/assets/16/19/1463165123-easy-egg-casserole-recipe.jpg"),
            new Recipe("Honey Walnut Shrimp", "Scottie Pippen", "https://dinnerthendessert.com/wp-content/uploads/2016/03/Panda-Express-Honey-Walnut-Shrimp-2-2-680x453.jpg"),
            new Recipe("Negroni Cocktail", "Lebron James", "http://cdn.liquor.com/wp-content/uploads/2016/04/15115430/NegroniOriginal720FB.jpg")
        ]

        return Observable.create(o => {
            o.next(fake);
        })
    }
}