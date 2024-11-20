import { PrismaClient } from "@prisma/client";
import { subDays } from "date-fns";
const prisma = new PrismaClient();

export const borrowBook = async (data: {
  bookId: string;
  memberId: string;
}) => {
  return await prisma.borrowRecord.create({
    data: {
      bookId: data.bookId,
      memberId: data.memberId,
      borrowDate: new Date(),
    },
  });
};

export const returnBook = async (borrowId: string) => {
  await prisma.borrowRecord.update({
    where: { borrowId },
    data: { returnDate: new Date() },
  });
};

export const getOverdueBorrowLists = async () => {
  const fourteenDaysAgo = subDays(new Date(), 14);

  const overdueRecords = await prisma.borrowRecord.findMany({
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
    overdueDays:
      Math.floor(
        (new Date().getTime() - new Date(record.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14,
  }));
};
export const BorrowService = {
  borrowBook,
  returnBook,
  getOverdueBorrowLists,
};
