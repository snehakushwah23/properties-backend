import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getHighlightPropertyListController(req: Request, res: Response) {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ message: "City parameter is required" });
        }

        const properties = await PROPERTY.find({ city: city });

        return res.status(200).json({
            message: "Highlighted Properties Retrieved Successfully",
            payload: properties
        });

    } catch (err) {
        console.error("❌ ERROR in getHighlightPropertyListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
