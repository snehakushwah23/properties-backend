import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyGetByLatLngController(req: Request, res: Response) {
    try {
        const { southWestLat, southWestLng, northEastLat, northEastLng, cityName, region, page = 1, limit = 10 } = req.query;

        const properties = await PROPERTY.find({
            city: cityName,
            region: region,
            "location.lat": { $gte: Number(southWestLat), $lte: Number(northEastLat) },
            "location.lng": { $gte: Number(southWestLng), $lte: Number(northEastLng) }
        })
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));

        return res.status(200).json({
            message: "Properties retrieved successfully",
            payload: properties
        });

    } catch (err) {
        console.error("ERROR in propertyGetByLatLngController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
