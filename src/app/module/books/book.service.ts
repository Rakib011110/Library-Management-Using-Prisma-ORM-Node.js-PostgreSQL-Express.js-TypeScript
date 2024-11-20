import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createBook = async (data: any) => {
  return await prisma.book.create({
    data,
  });
};

const getAllBooks = async () => {
  const books = await prisma.book.findMany();
  return books;
};
const getBooksById = async (id: string) => {
  const books = await prisma.book.findMany({
    where: {
      bookId: id,
    },
  });
  return books;
};
const updateBooksById = async (id: string, data: any) => {
  const books = await prisma.book.update({
    where: {
      bookId: id,
    },
    data,
  });
  return books;
};
const deletBooksById = async (id: string) => {
  const books = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });
  return books;
};

export const BookServices = {
  createBook,
  getAllBooks,
  getBooksById,
  updateBooksById,
  deletBooksById,
};
