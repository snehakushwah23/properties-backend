import { Request, Response } from "express";
import { PROPERTY_LOCATION_CITY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function searchCityController(req: Request, res: Response) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;

        if (!search) {
            return res.status(400).json({ message: "Search query is required" });
        }

        const cities = await PROPERTY_LOCATION_CITY.find({ city: { $regex: search, $options: "i" } })
            .sort({ city: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "City Search Results Retrieved Successfully",
            payload: cities
        });

    } catch (err) {
        console.error("ERROR in searchCityController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
