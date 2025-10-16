import { Request, Response } from "express";
import { WEBSITE_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getWebsiteHomePageFeaturedImageController(req: Request, res: Response) {
    try {

        const { imageID } = req.query;

        const image = await WEBSITE_HOME_PAGE_FEATURED_IMAGE.findById(imageID);

        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }

        return res.status(200).json({
            message: "Website featured image retrieved successfully",
            payload: image
        });

    } catch (err) {
        console.error("ERROR:" + __filename);
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
