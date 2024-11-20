import { Request, Response } from "express";
import { BookServices } from "./book.service";

const createBooks = async (req: Request, res: Response) => {
  try {
    const book = await BookServices.createBook(req.body);
    res.status(201).json({
      success: true,
      status: 201,

      message: "Book created successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.getAllBooks();

    res.status(201).json({
      success: true,
      status: 200,

      message: "Books retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getBooksById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await BookServices.getBooksById(id);

    res.status(201).json({
      success: true,
      status: 200,

      message: "Books retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const UpdateBooksById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await BookServices.updateBooksById(id, req.body);

    res.status(201).json({
      success: true,
      status: 200,

      message: "Books update successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const deletBooksById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await BookServices.deletBooksById(id);

    res.status(201).json({
      success: true,
      status: 200,

      message: "Book successfully deleted",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const booksContrller = {
  createBooks,
  getAllBooks,
  getBooksById,
  UpdateBooksById,
  deletBooksById,
};
