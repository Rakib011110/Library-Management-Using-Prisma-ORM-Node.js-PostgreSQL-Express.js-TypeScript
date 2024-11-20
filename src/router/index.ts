import express from "express";
import { BookRoutes } from "../app/module/books/book.routes";
import { MemberRoutes } from "../app/module/member/member.routes";
import { BorrowRoutes } from "../app/module/member/borrow.routes";

const routers = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    router: BookRoutes,
  },
  {
    path: "/members",
    router: MemberRoutes,
  },
  {
    path: "/borrow",
    router: BorrowRoutes,
  },
];

moduleRoutes.forEach((route) => routers.use(route.path, route.router));

export default routers;
