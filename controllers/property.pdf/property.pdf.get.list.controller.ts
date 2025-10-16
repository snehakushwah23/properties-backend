import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { PROPERTY_PDF } from "../../services/mongodb";

export async function propertyPDFListController(req: Request, res: Response) {
    try {
        const { propertyID } = req.query;

        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }

        // Fetch all images related to the given propertyID
        const propertyPDF = await PROPERTY_PDF.find({ propertyID });

        if (!propertyPDF.length) {
            return res.status(404).json({ message: responseMessages.PROPERTY_PDF_NOT_FOUND });
        }

        return res.status(200).json({ 
            message: responseMessages.PROPERTY_PDF_FETCHED,
            payload: propertyPDF 
        });

    } catch (err) {
        console.error("ERROR in propertyPhotoListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
