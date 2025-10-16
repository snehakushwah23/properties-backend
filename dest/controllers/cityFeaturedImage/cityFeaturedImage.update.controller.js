"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCityFeaturedImageTitleController = updateCityFeaturedImageTitleController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function updateCityFeaturedImageTitleController(req, res) {
    try {
        const { cityFeaturedImageID, title } = req.body;
        if (!cityFeaturedImageID) {
            return res.status(400).json({ error: "CITY_FEATURED_IMAGE_ID_REQUIRED" });
        }
        if (!title) {
            return res.status(400).json({ error: "TITLE_REQUIRED" });
        }
        const updatedImage = await mongodb_1.CITY_FEATURED_IMAGE.findOneAndUpdate({ _id: cityFeaturedImageID }, { title: title }, { new: true });
        if (!updatedImage) {
            return res.status(404).json({ error: "IMAGE_NOT_FOUND" });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_PHOTO_UPDATED,
            payload: updatedImage,
        });
    }
    catch (err) {
        console.error("❌ ERROR in upsertCityFeaturedImageTitleController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=cityFeaturedImage.update.controller.js.map