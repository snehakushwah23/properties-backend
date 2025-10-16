import { Request, Response } from "express";
import { APP_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getAppHomePageFeaturedImageListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10 } = req.query;

        const images = await APP_HOME_PAGE_FEATURED_IMAGE.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "Featured images list retrieved successfully",
            payload: images
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
