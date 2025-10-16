import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { PROPERTY_VIDEO } from "../../services/mongodb";

export async function propertyVideoOrderUpdateController(req: Request, res: Response) {
    try {
        const { propertyID, videos } = req.body; // photos = [{ propertyPhotoID, order }]

        if (!propertyID || !Array.isArray(videos) || videos.length === 0) {
            return res.status(400).json({ message: "INVALID_INPUT" });
        }

        // Validate property photos belong to the given propertyID
        const existingPhotos = await PROPERTY_VIDEO.find({ propertyID });

        if (existingPhotos.length === 0) {
            return res.status(404).json({ message: responseMessages.PROPERTY_PHOTO_NOT_FOUND });
        }

        // Bulk update orders
        const bulkUpdateOperations = videos.map(({ propertyVideoID, order }) => ({
            updateOne: {
                filter: { _id: propertyVideoID, propertyID }, 
                update: { order }
            }
        }));

        await PROPERTY_VIDEO.bulkWrite(bulkUpdateOperations);

        return res.status(200).json({ message: "PROPERTY_PHOTO_ORDER_UPDATED" });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
