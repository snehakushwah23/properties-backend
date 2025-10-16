import { Request, Response } from "express";
import { CITY_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCityFeaturedImageController(req: Request, res: Response) {
    try {
        const { imageID } = req.query;

        // Fetch the image based on imageID
        const cityImage = await CITY_FEATURED_IMAGE.findById(imageID);

        if (!cityImage) {
            return res.status(404).json({ message: responseMessages.IMAGE_NOT_FOUND });
        }

        return res.status(200).json({
            message: responseMessages.IMAGE_FETCHED,
            payload: cityImage,
        });
    } catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
