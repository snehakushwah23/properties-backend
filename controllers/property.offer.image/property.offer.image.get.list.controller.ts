import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { PROPERTY_OFFER_IMAGE } from "../../services/mongodb";

export async function propertyOfferImageListController(req: Request, res: Response) {
    try {
        const { propertyID } = req.query;

        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }

        // Fetch all images related to the given propertyID
        const propertyImages = await PROPERTY_OFFER_IMAGE.find({ propertyID }).sort({ order: 1 });;

        if (!propertyImages.length) {
            return res.status(404).json({ message: "PROPERTY_OFFER_IMAGE_NOT_FOUND" });
        }

        return res.status(200).json({ 
            message: "PROPERTY_OFFER_IMAGE_FETCHED", 
            payload: propertyImages 
        });

    } catch (err) {
        console.error("ERROR in propertyOfferImageListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
