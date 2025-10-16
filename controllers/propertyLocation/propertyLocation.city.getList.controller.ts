import { Request, Response } from "express";
import { PROPERTY_LOCATION_CITY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCityListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10, order = "asc" } = req.query;

        const cities = await PROPERTY_LOCATION_CITY.find()
            .sort({ city: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "City List Retrieved Successfully",
            payload: cities
        });

    } catch (err) {
        console.error("ERROR in getCityListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
