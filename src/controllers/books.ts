import { Book } from "@/models";
import { RequestHandler } from "express";

export class BooksController {
    public static getBooks: RequestHandler = (req, res) => {
        const books = Book.all();

        return res.send(books);
    };

    public static getBook: RequestHandler = (req, res) => {
        const id = req.params.id;
        const book = Book.findById(id);

        if (!book) {
            return res.sendStatus(404);
        }

        return res.send(book);
    };
}
