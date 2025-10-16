import { Request, Response } from "express";
import { SUB_ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function subAdminUpdateController(req: Request, res: Response) {
    try {
        const { accessToken } = req as any;
        const updateData = req.body;

        const updatedSubAdmin = await SUB_ADMIN.findByIdAndUpdate(accessToken.ID, updateData, { new: true });

        return res.status(200).json({
            message: responseMessages.ADMIN_UPDATED,
            payload: updatedSubAdmin
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
