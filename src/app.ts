import express from "express";
import { Request, Response } from "express";
import { apiRouter } from "./routes";

const app = express();

app.get("/", function (req: Request, res: Response) {
    return res.send("Welcome to ExpressJS + Typescript server");
});

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});
