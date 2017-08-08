import { Recipe } from '../recipe'

export class AllRecipesParser {
    parse(src: string): object {
        let photos = [];
        let title: string;

        let matched = src.match(/class="rec-photo".*src="([^"]*)".*title="([^"]*)"/i);
        if (matched) {
            matched.forEach((val, i) => {
                if (i == 1) {
                    photos.push(val);
                }
                else if (i == 2) {
                    title = val;
                }
            })
        }

        console.log("fetched title : " + title);

        return new Recipe(title, null, null, null, null);
    }
}

/*

        // main photo and title
        let matched = src.match(/class="rec-photo".*src="([^"]*)".*title="([^"]*)"/i);
        if (matched) {
            matched.forEach((val, i) => {
                if (i == 1) {
                    this.photos.push(val);
                }
                else if (i == 2) {
                    this.title = val;
                }
            })
        }


        // ingredients
        let regex = /itemprop="ingredients">([^<]*)</gi;
        let ar;
        while ((ar = regex.exec(src)) !== null) {
            this.ingredients.push(ar[1]);
        }

        // directions
        regex = /recipe-directions__list--item">([^<]*)</gi;
        while ((ar = regex.exec(src)) !== null) {
            this.directions.push(ar[1]);
        }

*/