import { Request, Response } from "express";
import { APP_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getAppHomePageFeaturedImageTotalCountController(_req: Request, res: Response) {
    try {
        const totalCount = await APP_HOME_PAGE_FEATURED_IMAGE.countDocuments();

        return res.status(200).json({
            message: "Total featured image count retrieved successfully",
            payload: totalCount
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
