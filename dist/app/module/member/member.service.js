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
exports.MemberService = exports.deleteMemberById = exports.updateMemberById = exports.getMemberById = exports.getAllMembers = exports.createMember = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createMember = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.member.create({ data });
});
exports.createMember = createMember;
const getAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.member.findMany();
});
exports.getAllMembers = getAllMembers;
const getMemberById = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.member.findUnique({ where: { memberId } });
});
exports.getMemberById = getMemberById;
const updateMemberById = (memberId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.member.update({
        where: { memberId },
        data,
    });
});
exports.updateMemberById = updateMemberById;
const deleteMemberById = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.member.delete({ where: { memberId } });
});
exports.deleteMemberById = deleteMemberById;
exports.MemberService = {
    createMember: exports.createMember,
    getAllMembers: exports.getAllMembers,
    getMemberById: exports.getMemberById,
    updateMemberById: exports.updateMemberById,
    deleteMemberById: exports.deleteMemberById,
};
