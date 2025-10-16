import { Request, Response } from "express";
import { ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getAdminCountController(_req: Request, res: Response) {
    try {
        const count = await ADMIN.countDocuments();
        return res.status(200).json({
            message: "Admin count retrieved successfully",
            payload: count
        });
    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
