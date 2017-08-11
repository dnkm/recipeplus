let counter = 0;

export class Recipe {
    id: number;
    rating: number;

    constructor(
        public title: string,
        public website: string,
        public url: string,
        public ingredients: Ingredient[],
        public directions: string[],
        public photos: string[],
        public timeInMinutes: number,   // minutes
        public servings: number
    ) {
        this.id = ++counter;
        this.rating = Math.floor(Math.random() * 6);
    }
}

const units = [
    'cup', 'tablespoon'
]

export class Ingredient {
    public amount: Number;
    public unit: string;
    public name: string

    constructor(txt: string) {
        // TODO - take out amoun
        this.name = txt;
    }
}