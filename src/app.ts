import express from "express";
import booksRouter from "./app/controllers/books.controller";
import borrowRouter from "./app/controllers/borrow.controller";
import { globalErrorHandler } from "./app/middlewares/error.handler";
import { unknownEndpoint } from "./app/middlewares/unknown.endpoint";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://liteshelf-library.jakariya.eu.org",
    ],
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the LiteShelf Library API");
});

app.use("/api/books", booksRouter);
app.use("/api/borrow", borrowRouter);

app.use(unknownEndpoint);
app.use(globalErrorHandler);

export default app;
