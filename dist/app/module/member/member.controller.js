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
exports.MemberController = exports.deleteMemberById = exports.updateMemberById = exports.getMemberById = exports.getAllMembers = exports.createMember = void 0;
const MemberService = __importStar(require("./member.service"));
const createMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield MemberService.createMember(req.body);
        res
            .status(201)
            .json({ success: true, message: "Member created", data: member });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error creating member" });
    }
});
exports.createMember = createMember;
const getAllMembers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield MemberService.getAllMembers();
        res.status(200).json({
            success: true,
            status: 201,
            message: "Members retrieved",
            data: members,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error retrieving members" });
    }
});
exports.getAllMembers = getAllMembers;
const getMemberById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const member = yield MemberService.getMemberById(id);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Member retrieved",
            data: member,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error retrieving member" });
    }
});
exports.getMemberById = getMemberById;
const updateMemberById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const member = yield MemberService.updateMemberById(id, req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Member updated successfully",
            data: member,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error updated member" });
    }
});
exports.updateMemberById = updateMemberById;
const deleteMemberById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const member = yield MemberService.getMemberById(id);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Member successfully deleted",
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error deleted member" });
    }
});
exports.deleteMemberById = deleteMemberById;
exports.MemberController = {
    createMember: exports.createMember,
    getAllMembers: exports.getAllMembers,
    getMemberById: exports.getMemberById,
    updateMemberById: exports.updateMemberById,
    deleteMemberById: exports.deleteMemberById,
};
