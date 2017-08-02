let counter = 0;

export class Recipe {
    id: number;
    rating: number;

    constructor(
        public name: string, 
        public author: string,
        public photoUrl: string) {
        this.id = ++counter;
        this.rating = Math.floor(Math.random() * 6);
    }
}