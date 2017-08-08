let counter = 0;

export class Recipe {
    id: number;
    rating: number;

    constructor(
        public title: string, 
        public url: string,
        public ingredients: Ingredients[],
        public directions: string[],
        public photoUrl: string) {
        this.id = ++counter;
        this.rating = Math.floor(Math.random() * 6);
    }
}

export class Ingredients {
    constructor(public amount: Number, public unit: string, public name: string) {}
}