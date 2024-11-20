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
exports.BorrowService = exports.getOverdueBorrowLists = exports.returnBook = exports.borrowBook = void 0;
const client_1 = require("@prisma/client");
const date_fns_1 = require("date-fns");
const prisma = new client_1.PrismaClient();
const borrowBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.borrowRecord.create({
        data: {
            bookId: data.bookId,
            memberId: data.memberId,
            borrowDate: new Date(),
        },
    });
});
exports.borrowBook = borrowBook;
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.borrowRecord.update({
        where: { borrowId },
        data: { returnDate: new Date() },
    });
});
exports.returnBook = returnBook;
const getOverdueBorrowLists = () => __awaiter(void 0, void 0, void 0, function* () {
    const fourteenDaysAgo = (0, date_fns_1.subDays)(new Date(), 14);
    const overdueRecords = yield prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: fourteenDaysAgo,
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
    return overdueRecords.map((record) => ({
        borrowId: record.borrowId,
        bookTitle: record.book.title,
        borrowerName: record.member.name,
        overdueDays: Math.floor((new Date().getTime() - new Date(record.borrowDate).getTime()) /
            (1000 * 60 * 60 * 24)) - 14,
    }));
});
exports.getOverdueBorrowLists = getOverdueBorrowLists;
exports.BorrowService = {
    borrowBook: exports.borrowBook,
    returnBook: exports.returnBook,
    getOverdueBorrowLists: exports.getOverdueBorrowLists,
};
