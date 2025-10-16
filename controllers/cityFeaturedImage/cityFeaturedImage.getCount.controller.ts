import { Request, Response } from "express";
import { CITY_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCityFeaturedImageCountController(_req: Request, res: Response) {
    try {
        // Fetch the total count of city featured images
        const totalCount = await CITY_FEATURED_IMAGE.countDocuments();

        return res.status(200).json({
            message: responseMessages.IMAGE_COUNT_FETCHED,
            payload: { totalCount },
        });
    } catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
