import express, { Router } from "express";
import cors from "cors";
import { BooksController } from "@/controllers";

export const apiRouter = Router();

apiRouter.use(express.json());
apiRouter.use(cors());

apiRouter.get("/", (req, res) => {
    return res.send("API route");
});

apiRouter.get("/books", BooksController.getBooks);
apiRouter.get("/books/details/:id", BooksController.getBook);
