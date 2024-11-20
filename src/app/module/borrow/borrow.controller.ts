import { Request, Response } from "express";
import * as BorrowService from "./borrow.service";

const borrowBook = async (req: Request, res: Response) => {
  try {
    const result = await BorrowService.borrowBook(req.body);
    res.status(200).json({
      success: true,
      status: 200,
      message: "Book borrowed successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to borrow book" });
  }
};

const returnBook = async (req: Request, res: Response) => {
  try {
    await BorrowService.returnBook(req.body.borrowId);
    res.status(200).json({
      success: true,
      status: 200,
      message: "Book returned successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to return book" });
  }
};

const getOverdueBorrowList = async (_req: Request, res: Response) => {
  try {
    const overdueList = await BorrowService.getOverdueBorrowLists();
    const message = overdueList.length
      ? "Overdue borrow list fetched"
      : "No overdue books";

    res.status(200).json({
      success: true,
      status: 200,
      message,
      data: overdueList,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: "Error fetching overdue borrow list",
    });
  }
};

export const BorrowController = {
  borrowBook,
  returnBook,
  getOverdueBorrowList,
};
