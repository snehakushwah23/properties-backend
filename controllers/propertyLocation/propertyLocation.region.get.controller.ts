import { Request, Response } from "express";
import { PROPERTY_LOCATION_REGION } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getRegionController(req: Request, res: Response) {
    try {
        const { regionID } = req.query;

        if (!regionID) {
            return res.status(400).json({ message: "Region ID is required" });
        }

        const region = await PROPERTY_LOCATION_REGION.findById(regionID);

        if (!region) {
            return res.status(404).json({ message: "Region Not Found" });
        }

        return res.status(200).json({
            message: "Region Retrieved Successfully",
            payload: region
        });

    } catch (err) {
        console.error("ERROR in getRegionController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
