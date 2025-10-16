import { Request, Response } from "express";
import { PROPERTY_OFFER_DESCRIPTION } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function createPropertyOfferDescriptionController(req: Request, res: Response) {
    try {
        const { shortDescriptionOffer, shortDescriptionSpecialOffer, propertyID } = req.body;

        const updatedEntry = await PROPERTY_OFFER_DESCRIPTION.findOneAndUpdate(
            { propertyID },
            { shortDescriptionOffer, shortDescriptionSpecialOffer }, 
            { new: true, upsert: true } 
        );

        return res.status(200).json({
            message: "Description Updated Successfully",
            payload: updatedEntry
        });

    } catch (err) {
        console.error("❌ ERROR in createPropertyOfferDescriptionController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
