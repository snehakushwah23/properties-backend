import { Request, Response } from "express";
import { NEWS } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function newsGetTodaysCountController(_req: Request, res: Response) {
    try {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const todaysCount = await NEWS.countDocuments({
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });

        return res.status(200).json({
            message: "Today's news count retrieved successfully",
            payload: todaysCount
        });

    } catch (err) {
        console.error("❌ ERROR in newsGetTodaysCountController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
