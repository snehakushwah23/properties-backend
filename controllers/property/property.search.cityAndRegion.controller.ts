import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertySearchByCityAndRegionController(req: Request, res: Response) {
    try {
        const { city, region, page = 1, limit = 10, order = "asc" } = req.query;

        const properties = await PROPERTY.find({
            city,
            region
        })
        .sort({ region: order === "asc" ? 1 : -1 })
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));

        return res.status(200).json({
            message: "Property search by city and region retrieved successfully",
            payload: properties
        });

    } catch (err) {
        console.error("❌ ERROR in propertySearchByCityAndRegionController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
