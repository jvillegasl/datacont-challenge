import { Book } from "@/models";
import { RequestHandler } from "express";

export class BooksController {
    public static getBooks: RequestHandler = (req, res) => {
        try {
            const books = Book.all();

            return res.send(books);
        } catch (error) {
            console.error(error);

            return res.sendStatus(500);
        }
    };

    public static getBook: RequestHandler = (req, res) => {
        const id = req.params.id;

        try {
            const book = Book.findById(id);

            if (!book) return res.sendStatus(404);

            return res.send(book);
        } catch (error) {
            console.error(error);

            return res.sendStatus(500);
        }
    };
}
