import { Request, Response } from "express";
import { BANK } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getBankCountController(_req: Request, res: Response) {
    try {
        const count = await BANK.countDocuments();
        return res.status(200).json({
            message: "Bank count retrieved successfully",
            payload: count
        });
    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
