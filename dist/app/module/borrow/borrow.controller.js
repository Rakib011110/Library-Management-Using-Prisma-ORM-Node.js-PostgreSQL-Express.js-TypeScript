"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.BorrowController = void 0;
const BorrowService = __importStar(require("./borrow.service"));
const borrowBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield BorrowService.borrowBook(req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Book borrowed successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Failed to borrow book" });
    }
});
const returnBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield BorrowService.returnBook(req.body.borrowId);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Book returned successfully",
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Failed to return book" });
    }
});
const getOverdueBorrowList = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const overdueList = yield BorrowService.getOverdueBorrowLists();
        const message = overdueList.length
            ? "Overdue borrow list fetched"
            : "No overdue books";
        res.status(200).json({
            success: true,
            status: 200,
            message,
            data: overdueList,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Error fetching overdue borrow list",
        });
    }
});
exports.BorrowController = {
    borrowBook,
    returnBook,
    getOverdueBorrowList,
};
