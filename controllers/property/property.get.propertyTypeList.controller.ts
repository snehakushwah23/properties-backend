import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyGetTypeListController(req: Request, res: Response) {
    try {
        const { propertyType, page = 1, limit = 10 } = req.query;

        const properties = await PROPERTY.find({ propertyType })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "Property type list retrieved successfully",
            payload: properties
        });

    } catch (err) {
        console.error("❌ ERROR in propertyGetTypeListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
