import { Request, Response } from "express";
import { PROPERTY_LOCATION_CITY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function updateCityController(req: Request, res: Response) {
    try {
        const { cityID, city } = req.body;

        if (!cityID || !city) {
            return res.status(400).json({ message: "City ID and updated city name are required" });
        }

        const updatedCity = await PROPERTY_LOCATION_CITY.findByIdAndUpdate(cityID, { city }, { new: true });

        if (!updatedCity) {
            return res.status(404).json({ message: "City Not Found" });
        }

        return res.status(200).json({
            message: "City Updated Successfully",
            payload: updatedCity
        });

    } catch (err) {
        console.error("ERROR in updateCityController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
