import { Request, Response } from "express";
import { ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function adminUpdateController(req: Request, res: Response) {
    try {
        const { accessToken } = req as any;
        const updateData = req.body;

        const updatedAdmin = await ADMIN.findByIdAndUpdate(accessToken.ID, updateData, { new: true });

        return res.status(200).json({ 
            message: responseMessages.ADMIN_UPDATED, 
            payload: updatedAdmin 
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
