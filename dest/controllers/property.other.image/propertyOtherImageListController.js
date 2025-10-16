"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOtherImageListController = propertyOtherImageListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOtherImageListController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }
        const propertyImages = await mongodb_1.PROPERTY_OTHER_IMAGE.find({ propertyID }).sort({ order: 1 });
        if (!propertyImages.length) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_FETCHED,
            payload: propertyImages
        });
    }
    catch (err) {
        console.error("ERROR in propertyOtherImageListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyOtherImageListController.js.map