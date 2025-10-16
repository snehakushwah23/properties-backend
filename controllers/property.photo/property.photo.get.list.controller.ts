import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { PROPERTY_PHOTO } from "../../services/mongodb";

export async function propertyPhotoListController(req: Request, res: Response) {
    try {
        const { propertyID } = req.query;

        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }

        // Fetch all images related to the given propertyID
        const propertyImages = await PROPERTY_PHOTO.find({ propertyID }).sort({ order: 1 });

        if (!propertyImages.length) {
            return res.status(404).json({ message: responseMessages.PROPERTY_PHOTO_NOT_FOUND });
        }

        return res.status(200).json({ 
            message: responseMessages.PROPERTY_PHOTO_FETCHED,
            payload: propertyImages 
        });

    } catch (err) {
        console.error("ERROR in propertyPhotoListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
