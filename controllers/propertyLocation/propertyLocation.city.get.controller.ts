import { Request, Response } from "express";
import { PROPERTY_LOCATION_CITY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCityController(req: Request, res: Response) {
    try {
        const { cityID } = req.query;

        if (!cityID) {
            return res.status(400).json({ message: "City ID is required" });
        }

        const city = await PROPERTY_LOCATION_CITY.findById(cityID);

        if (!city) {
            return res.status(404).json({ message: "City Not Found" });
        }

        return res.status(200).json({
            message: "City Retrieved Successfully",
            payload: city
        });

    } catch (err) {
        console.error("ERROR in getCityController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
