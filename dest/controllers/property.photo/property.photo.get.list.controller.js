"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPhotoListController = propertyPhotoListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyPhotoListController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }
        const propertyImages = await mongodb_1.PROPERTY_PHOTO.find({ propertyID }).sort({ order: 1 });
        if (!propertyImages.length) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_PHOTO_FETCHED,
            payload: propertyImages
        });
    }
    catch (err) {
        console.error("ERROR in propertyPhotoListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.photo.get.list.controller.js.map