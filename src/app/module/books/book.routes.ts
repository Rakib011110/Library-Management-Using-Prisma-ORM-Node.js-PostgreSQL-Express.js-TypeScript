import express from "express";
import { booksContrller } from "./book.controller";

const router = express.Router();

router.post("/", booksContrller.createBooks);
router.get("/", booksContrller.getAllBooks);
router.get("/:id", booksContrller.getBooksById);
router.patch("/:id", booksContrller.UpdateBooksById);
router.delete("/:id", booksContrller.deletBooksById);

export const BookRoutes = router;
