import { Request, Response } from "express";
import { PROPERTY_LOCATION_REGION } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function deleteRegionController(req: Request, res: Response) {
    try {
        const { regionID } = req.body;

        if (!regionID) {
            return res.status(400).json({ message: "Region ID is required" });
        }

        const deletedRegion = await PROPERTY_LOCATION_REGION.findByIdAndDelete(regionID);

        if (!deletedRegion) {
            return res.status(404).json({ message: "Region Not Found" });
        }

        return res.status(200).json({
            message: "Region Deleted Successfully"
        });

    } catch (err) {
        console.error("ERROR in deleteRegionController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
