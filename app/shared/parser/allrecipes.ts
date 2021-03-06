import { Recipe, Ingredient } from '../recipe'

export class AllRecipesParser {
    parse(src: string): Recipe {
        let title: string = this.findTitle(src);
        let website: string = 'All Recipes';
        let photos: string[] = this.findPhotos(src);
        let ingredients: Ingredient[] = this.findIngreidents(src);
        let timeInMinutes: number = 0;
        let servings: number = 0;
        return new Recipe(title, website, null, ingredients, null, photos, timeInMinutes, servings, []);
    }

    findTitle(src): string {
        let match = src.match(/<title>(.*)<\/title>/i);
        return (match) ? match[1] : '';
    }

    findPhotos(src: string): string[] {
        return src.match(/http[^'"]*userphotos[^'"]*[jpg|gif|png]/gi);
    }

    findIngreidents(src: string): Ingredient[] {
        let result: Ingredient[] = [];

        let regex = /itemprop="ingredients">([^<]*)</gi;
        let match;

        while (match = regex.exec(src)) {
            result.push(new Ingredient(match[1]));
        }

        return result;
    }

    findDirections(src: string): String[] {
        let result: String[] = [];

        let regex = /class="recipe-directions__list--item">([^<]*)</gi;
        let match;

        while (match = regex.exec(src)) {
            result.push(match[1]);
        }

        return result;
    }


}
