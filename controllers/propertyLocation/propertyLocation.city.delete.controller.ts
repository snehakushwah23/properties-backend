import { Request, Response } from "express";
import { PROPERTY_LOCATION_CITY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function deleteCityController(req: Request, res: Response) {
    try {
        const { cityID } = req.body;

        if (!cityID) {
            return res.status(400).json({ message: "City ID is required" });
        }

        const deletedCity = await PROPERTY_LOCATION_CITY.findByIdAndDelete(cityID);

        if (!deletedCity) {
            return res.status(404).json({ message: "City Not Found" });
        }

        return res.status(200).json({
            message: "City Deleted Successfully"
        });

    } catch (err) {
        console.error("❌ ERROR in deleteCityController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
