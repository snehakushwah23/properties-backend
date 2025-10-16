import { Request, Response } from "express";
import { PROPERTY_LOCATION_REGION } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function searchRegionController(req: Request, res: Response) {
    try {
        const { search, page = 1, limit = 10, order = "asc", cityID } = req.query;

        if (!search) {
            return res.status(400).json({ message: "Search query is required" });
        }

        const query: any = {
            region: { $regex: search, $options: "i" }
        };

        if (cityID) {
            query.city = cityID;
        }

        const regions = await PROPERTY_LOCATION_REGION.find(query)
            .sort({ region: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "Region Search Results Retrieved Successfully",
            payload: regions
        });

    } catch (err) {
        console.error("ERROR in searchRegionController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
