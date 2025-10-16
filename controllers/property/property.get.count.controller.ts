import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyGetCountController(_req: Request, res: Response) {
    try {
        const count = await PROPERTY.countDocuments();

        return res.status(200).json({
            message: "Total property count retrieved successfully",
            payload: count
        });

    } catch (err) {
        console.error("ERROR in propertyGetCountController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
