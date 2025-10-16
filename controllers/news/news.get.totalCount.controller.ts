import { Request, Response } from "express";
import { NEWS } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function newsGetTotalCountController(_req: Request, res: Response) {
    try {
        const totalCount = await NEWS.countDocuments();

        return res.status(200).json({
            message: "Total news count retrieved successfully",
            payload: totalCount
        });

    } catch (err) {
        console.error("ERROR in newsGetTotalCountController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
