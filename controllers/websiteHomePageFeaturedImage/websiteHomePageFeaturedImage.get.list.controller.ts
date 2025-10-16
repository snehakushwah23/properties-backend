import { Request, Response } from "express";
import { WEBSITE_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";

export async function getWebsiteHomePageFeaturedImageListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10 } = req.query;
        
        const images = await WEBSITE_HOME_PAGE_FEATURED_IMAGE.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "Website featured images list retrieved successfully",
            payload: { imagesList: images } 
        });

    } catch (err) {
        return res.status(500).json({ error: "Execution failed" });
    }
}
