import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyCountForLatAndLongController(req: Request, res: Response) {
    try {
        const { southWestLat, southWestLng, northEastLat, northEastLng, cityName, region } = req.query;

        const count = await PROPERTY.countDocuments({
            city: cityName,
            region: region,
            "location.lat": { $gte: Number(southWestLat), $lte: Number(northEastLat) },
            "location.lng": { $gte: Number(southWestLng), $lte: Number(northEastLng) }
        });

        return res.status(200).json({
            message: "Property count for given coordinates retrieved successfully",
            payload: count
        });

    } catch (err) {
        console.error("ERROR in propertyCountForLatAndLongController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
