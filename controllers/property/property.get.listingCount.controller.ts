import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyGetListingCountController(_req: Request, res: Response) {
    try {
        const count = await PROPERTY.countDocuments({ listing: true });

        return res.status(200).json({
            message: "Property listing count retrieved successfully",
            payload: count
        });

    } catch (err) {
        console.error("ERROR in propertyGetListingCountController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
