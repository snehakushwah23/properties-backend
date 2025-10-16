import { Request, Response } from "express";
import { PROPERTY_LOCATION_REGION } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function createRegionController(req: Request, res: Response) {
    try {
        const { city, region } = req.body;

        if (!city || !region) {
            return res.status(400).json({ message: "City and Region are required" });
        }

        const newRegion = await PROPERTY_LOCATION_REGION.create({ city, region });

        return res.status(201).json({
            message: "Region Created Successfully",
            payload: newRegion
        });

    } catch (err) {
        console.error("ERROR in createRegionController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
