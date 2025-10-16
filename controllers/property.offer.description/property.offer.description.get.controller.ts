import { Request, Response } from "express";
import { PROPERTY_OFFER_DESCRIPTION } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getPropertyOfferDescriptionController(req: Request, res: Response) {
    try {
        const { propertyID } = req.query; // Get propertyID from request query

        if (!propertyID) {
            return res.status(400).json({ error: "Property ID is required" });
        }

        const offerDescription = await PROPERTY_OFFER_DESCRIPTION.findOne({ propertyID });

        return res.status(200).json({
            message: "Descriptions Retrieved Successfully",
            payload: offerDescription || null, // Return null if not found
        });

    } catch (err) {
        console.error("❌ ERROR in getPropertyOfferDescriptionController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
