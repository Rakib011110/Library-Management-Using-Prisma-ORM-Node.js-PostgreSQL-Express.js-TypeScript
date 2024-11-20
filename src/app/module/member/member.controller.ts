import { Request, Response } from "express";
import * as MemberService from "./member.service";

export const createMember = async (req: Request, res: Response) => {
  try {
    const member = await MemberService.createMember(req.body);
    res
      .status(201)
      .json({ success: true, message: "Member created", data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating member" });
  }
};

export const getAllMembers = async (_req: Request, res: Response) => {
  try {
    const members = await MemberService.getAllMembers();
    res.status(200).json({
      success: true,
      status: 201,

      message: "Members retrieved",
      data: members,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving members" });
  }
};

export const getMemberById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const member = await MemberService.getMemberById(id);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Member retrieved",
      data: member,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving member" });
  }
};

export const updateMemberById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const member = await MemberService.updateMemberById(id, req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Member updated successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updated member" });
  }
};

export const deleteMemberById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const member = await MemberService.getMemberById(id);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Member successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleted member" });
  }
};

export const MemberController = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
