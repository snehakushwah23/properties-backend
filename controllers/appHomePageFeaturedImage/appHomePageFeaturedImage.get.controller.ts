import { Request, Response } from "express";
import { APP_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getAppHomePageFeaturedImageController(req: Request, res: Response) {
    try {
        const { imageID } = req.query;

        if (!imageID) {
            return res.status(400).json({ message: "Image ID is required" });
        }

        const image = await APP_HOME_PAGE_FEATURED_IMAGE.findById(imageID);

        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }

        return res.status(200).json({
            message: "Featured image retrieved successfully",
            payload: image
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
