"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const router = express_1.default.Router();
router.post("/", member_controller_1.MemberController.createMember);
router.get("/", member_controller_1.MemberController.getAllMembers);
router.get("/:id", member_controller_1.MemberController.getMemberById);
router.patch("/:id", member_controller_1.MemberController.updateMemberById);
router.delete("/:id", member_controller_1.MemberController.deleteMemberById);
exports.MemberRoutes = router;
