import { Request, Response } from "express";
import { PROPERTY_LOCATION_CITY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function createCityController(req: Request, res: Response) {
    try {
        const { city } = req.body;

        if (!city) {
            return res.status(400).json({ message: "City name is required" });
        }

        const newCity = await PROPERTY_LOCATION_CITY.create({ city });

        return res.status(201).json({
            message: "City Created Successfully",
            payload: newCity
        });

    } catch (err) {
        console.error("ERROR in createCityController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
