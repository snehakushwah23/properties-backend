import { Request, Response } from "express";
import { PROPERTY_LOCATION_REGION } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function updateRegionController(req: Request, res: Response) {
    try {
        const { regionID, region } = req.body;

        if (!regionID || !region) {
            return res.status(400).json({ message: "Region ID, City, and updated Region name are required" });
        }

        const updatedRegion = await PROPERTY_LOCATION_REGION.findByIdAndUpdate(regionID, { region }, { new: true });

        if (!updatedRegion) {
            return res.status(404).json({ message: "Region Not Found" });
        }

        return res.status(200).json({
            message: "Region Updated Successfully",
            payload: updatedRegion
        });

    } catch (err) {
        console.error("ERROR in updateRegionController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
