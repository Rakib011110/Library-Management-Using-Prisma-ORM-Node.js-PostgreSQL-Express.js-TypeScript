import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMember = async (data: any) => {
  return await prisma.member.create({ data });
};

export const getAllMembers = async () => {
  return await prisma.member.findMany();
};

export const getMemberById = async (memberId: string) => {
  return await prisma.member.findUnique({ where: { memberId } });
};

export const updateMemberById = async (memberId: string, data: any) => {
  return await prisma.member.update({
    where: { memberId },

    data,
  });
};
export const deleteMemberById = async (memberId: string) => {
  return await prisma.member.delete({ where: { memberId } });
};

export const MemberService = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
