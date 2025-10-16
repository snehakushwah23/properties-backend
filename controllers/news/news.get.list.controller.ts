import { Request, Response } from "express";
import { NEWS } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function newsGetListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10 } = req.query;

        const newsList = await NEWS.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .sort({ createdAt: -1 });

        return res.status(200).json({
            message: "News list retrieved successfully",
            payload: newsList
        });

    } catch (err) {
        console.error("ERROR in newsGetListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
