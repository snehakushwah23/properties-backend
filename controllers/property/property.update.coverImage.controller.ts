import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { uploadObjectImage } from "../../helpers/upload.object.image";
import { generateRandomString } from "../../helpers/generate.random.string";

export async function propertyUpdateCoverImageController(req: Request, res: Response) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Cover image is required" });
        }

        // Upload image and get the image object
        const imageObject = await uploadObjectImage(
            "property-cover-image",
            generateRandomString(10),
            req.file.buffer,
            req.file.mimetype
        );

        // Extract propertyID from request
        const { propertyID } = req.body;

        // Update property with the new cover image
        const updatedProperty = await PROPERTY.findByIdAndUpdate(
            propertyID,
            { coverImage: imageObject },
            { new: true }
        );

        if (!updatedProperty) {
            return res.status(404).json({ message: responseMessages.PROPERTY_NOT_FOUND });
        }

        return res.status(200).json({
            message: "Cover image updated successfully",
            payload: updatedProperty,
        });

    } catch (err) {
        console.error("❌ ERROR in propertyUpdateCoverImageController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
