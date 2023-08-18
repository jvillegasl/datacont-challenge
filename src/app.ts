import express from "express";
import { apiRouter } from "./routes";

const PORT = 5000;

const app = express();

app.use("/", apiRouter);

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
