"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPhotoOrderUpdateController = propertyPhotoOrderUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyPhotoOrderUpdateController(req, res) {
    try {
        const { propertyID, photos } = req.body;
        if (!propertyID || !Array.isArray(photos) || photos.length === 0) {
            return res.status(400).json({ message: "INVALID_INPUT" });
        }
        const existingPhotos = await mongodb_1.PROPERTY_PHOTO.find({ propertyID });
        if (existingPhotos.length === 0) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_NOT_FOUND });
        }
        const bulkUpdateOperations = photos.map(({ propertyPhotoID, order }) => ({
            updateOne: {
                filter: { _id: propertyPhotoID, propertyID },
                update: { order }
            }
        }));
        await mongodb_1.PROPERTY_PHOTO.bulkWrite(bulkUpdateOperations);
        return res.status(200).json({ message: "PROPERTY_PHOTO_ORDER_UPDATED" });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.photo.update.order.controller.js.map