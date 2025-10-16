import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertySearchByNameController(req: Request, res: Response) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;

        const properties = await PROPERTY.find({
            name: { $regex: new RegExp(search as string, "i") }
        })
        .sort({ name: order === "asc" ? 1 : -1 })
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));

        return res.status(200).json({
            message: "Property search by name retrieved successfully",
            payload: properties
        });

    } catch (err) {
        console.error("❌ ERROR in propertySearchByNameController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
