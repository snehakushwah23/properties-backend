import { Request, Response } from "express";
import { BUILDER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getBuilderCountController(_req: Request, res: Response) {
    try {
        const count = await BUILDER.countDocuments();
        return res.status(200).json({
            message: "Builder count retrieved successfully",
            payload: count
        });
    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
