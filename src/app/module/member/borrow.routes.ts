import express from "express";
import { BorrowController } from "../borrow/borrow.controller";

const router = express.Router();

router.post("/", BorrowController.borrowBook);
router.post("/return", BorrowController.returnBook);
router.get("/overdue", BorrowController.getOverdueBorrowList);
export const BorrowRoutes = router;
