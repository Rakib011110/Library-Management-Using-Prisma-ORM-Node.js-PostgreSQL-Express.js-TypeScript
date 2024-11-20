"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../app/module/books/book.routes");
const member_routes_1 = require("../app/module/member/member.routes");
const borrow_routes_1 = require("../app/module/member/borrow.routes");
const routers = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/books",
        router: book_routes_1.BookRoutes,
    },
    {
        path: "/members",
        router: member_routes_1.MemberRoutes,
    },
    {
        path: "/borrow",
        router: borrow_routes_1.BorrowRoutes,
    },
];
moduleRoutes.forEach((route) => routers.use(route.path, route.router));
exports.default = routers;
