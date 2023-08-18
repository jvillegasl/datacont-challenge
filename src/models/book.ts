import fs from "fs";

export interface IBook {
    id: number;
    title: string;
    description: string;
    author: string;
    price: number;
}

export class Book {
    public static all() {
        const filePath = "src/data/books.json";
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const books: IBook[] = JSON.parse(jsonData);

        return books;
    }

    public static findById(id: string) {
        const books = this.all();
        const book = books.find((t) => t.id.toString() === id);

        return book;
    }
}
