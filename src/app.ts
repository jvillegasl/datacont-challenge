import express from "express";
import { Request, Response } from "express";
import { apiRouter } from "./routes";

const PORT = 5000;

const app = express();

app.get("/", function (req: Request, res: Response) {
    return res.send(
        "Welcome to ExpressJS + Typescript Datacont Challenge server"
    );
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});
