import { Request, Response } from "express";
import { SUB_ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getSubAdminCountController(_req: Request, res: Response) {
    try {
        const count = await SUB_ADMIN.countDocuments();
        return res.status(200).json({
            message: "Sub-admin count retrieved successfully",
            payload: count
        });
    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
