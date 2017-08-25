import { Injectable } from "@angular/core";

import { knownFolders, File, Folder } from "file-system";
import { Recipe } from "./recipe";

import { Observable } from 'rxjs';

@Injectable()
export class RecipeListService {
    private folder: Folder;
    private dbFile: File;
    private recipes: Recipe[] = [];

    constructor() {
        let documents = knownFolders.documents();
        this.folder = documents.getFolder("myrecipes");
        this.dbFile = this.folder.getFile("db.txt")
    }

    getMyRecipes(): Promise<Recipe[]> {
        if (this.recipes.length > 0) {
            return new Promise((res, rej) => {
                console.log("already fetched. currently there are " + this.recipes.length + " recipes in the DB");
                res(this.recipes);
            })
        }
        return new Promise((res, rej) => {
            this.dbFile.readText()
                .then(txt => {
                    if (!txt) {
                        return res([]);
                    }
                    let arr: Object[] = JSON.parse(txt);
                    if (!arr || !(arr instanceof Array)) {
                        return res([]);
                    }
                    this.recipes = arr.map(obj => obj as Recipe);
                    res(this.recipes);
                })
                .catch(err => {
                    console.error("Cannot open file");
                    rej(new Error("Cannot open file"));
                });
        });
    }

    setMyRecipes(recipes: Recipe[]) {
        this.dbFile.writeText(JSON.stringify(recipes));
    }

    addToMyRecipes(newRecipe: Recipe): Promise<boolean> {
        return new Promise((res, rej) => {
            this.getMyRecipes().then(recipes => {
                if (recipes.findIndex(r => r.url === newRecipe.url) >= 0) {
                    console.log("returning false");
                    return res(false);
                }
                this.setMyRecipes([...recipes, newRecipe]);
                console.log("returning true");
                return res(true);
            })
        });
    }
}