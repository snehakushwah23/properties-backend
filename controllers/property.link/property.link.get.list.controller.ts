import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { PROPERTY_LINK } from "../../services/mongodb";

export async function propertyLinkListController(req: Request, res: Response) {
    try {
        const { propertyID } = req.query;

        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }

        // Fetch all images related to the given propertyID
        const propertyLink = await PROPERTY_LINK.find({ propertyID });

        if (!propertyLink.length) {
            return res.status(404).json({ message: responseMessages.PROPERTY_LINK_NOT_FOUND });
        }

        return res.status(200).json({ 
            message: responseMessages.PROPERTY_LINK_FETCHED,
            payload: propertyLink 
        });

    } catch (err) {
        console.error("ERROR in propertyPhotoListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
