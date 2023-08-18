import { RequestHandler } from "express";

export class BooksController {
    public static getBooks: RequestHandler = (req, res) => {
        res.send([1, 2, 3, 4]);
    };
}
