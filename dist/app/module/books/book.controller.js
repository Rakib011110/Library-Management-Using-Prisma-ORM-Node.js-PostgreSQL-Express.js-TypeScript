"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksContrller = void 0;
const book_service_1 = require("./book.service");
const createBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_service_1.BookServices.createBook(req.body);
        res.status(201).json({
            success: true,
            status: 201,
            message: "Book created successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookServices.getAllBooks();
        res.status(201).json({
            success: true,
            status: 200,
            message: "Books retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
const getBooksById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield book_service_1.BookServices.getBooksById(id);
        res.status(201).json({
            success: true,
            status: 200,
            message: "Books retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
const UpdateBooksById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield book_service_1.BookServices.updateBooksById(id, req.body);
        res.status(201).json({
            success: true,
            status: 200,
            message: "Books update successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
const deletBooksById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield book_service_1.BookServices.deletBooksById(id);
        res.status(201).json({
            success: true,
            status: 200,
            message: "Book successfully deleted",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.booksContrller = {
    createBooks,
    getAllBooks,
    getBooksById,
    UpdateBooksById,
    deletBooksById,
};
