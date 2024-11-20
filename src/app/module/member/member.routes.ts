import express from "express";
import { MemberController } from "./member.controller";

const router = express.Router();

router.post("/", MemberController.createMember);
router.get("/", MemberController.getAllMembers);
router.get("/:id", MemberController.getMemberById);
router.patch("/:id", MemberController.updateMemberById);
router.delete("/:id", MemberController.deleteMemberById);

export const MemberRoutes = router;
