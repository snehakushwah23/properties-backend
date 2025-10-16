"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyVideoOrderUpdateController = propertyVideoOrderUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyVideoOrderUpdateController(req, res) {
    try {
        const { propertyID, videos } = req.body;
        if (!propertyID || !Array.isArray(videos) || videos.length === 0) {
            return res.status(400).json({ message: "INVALID_INPUT" });
        }
        const existingPhotos = await mongodb_1.PROPERTY_VIDEO.find({ propertyID });
        if (existingPhotos.length === 0) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_NOT_FOUND });
        }
        const bulkUpdateOperations = videos.map(({ propertyVideoID, order }) => ({
            updateOne: {
                filter: { _id: propertyVideoID, propertyID },
                update: { order }
            }
        }));
        await mongodb_1.PROPERTY_VIDEO.bulkWrite(bulkUpdateOperations);
        return res.status(200).json({ message: "PROPERTY_PHOTO_ORDER_UPDATED" });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.video.update.order.controller.js.map