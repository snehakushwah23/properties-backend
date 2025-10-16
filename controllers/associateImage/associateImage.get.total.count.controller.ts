import { Request, Response } from "express";
import { ASSOCIATE_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getAssociateImageTotalCountController(_req: Request, res: Response) {
    try {
        const totalCount = await ASSOCIATE_IMAGE.countDocuments();

        return res.status(200).json({
            message: "Total associate image count retrieved successfully",
            payload: totalCount
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
