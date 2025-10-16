import { Request, Response } from "express";
import { CITY_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCityFeaturedImageListController(req: Request, res: Response) {
    try {
        const { page, limit, cityID } = req.query;

        const pageNumber = Math.max(1, Number(page) || 1);
        const limitNumber = Math.max(1, Number(limit) || 10);

        const cityImages = await CITY_FEATURED_IMAGE.find({ cityID })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        return res.status(200).json({
            message: responseMessages.IMAGE_LIST_FETCHED,
            payload: {
                imagesList: cityImages,
            },
        });
    } catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
