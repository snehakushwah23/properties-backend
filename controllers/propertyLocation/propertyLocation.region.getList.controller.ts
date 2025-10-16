import { Request, Response } from "express";
import { PROPERTY_LOCATION_REGION } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getRegionListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10, order = "asc", city } = req.query;

        const query: any = {};
        if (city) {
            query.city = city;
        }

        const regions = await PROPERTY_LOCATION_REGION.find(query)
            .sort({ region: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "Region List Retrieved Successfully",
            payload: regions
        });

    } catch (err) {
        console.error("ERROR in getRegionListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
