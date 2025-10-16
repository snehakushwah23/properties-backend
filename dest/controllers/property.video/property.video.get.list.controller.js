"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyVideoListController = propertyVideoListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyVideoListController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }
        const propertyVideo = await mongodb_1.PROPERTY_VIDEO.find({ propertyID }).sort({ order: 1 });
        if (!propertyVideo.length) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_VIDEO_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_VIDEO_FETCHED,
            payload: propertyVideo
        });
    }
    catch (err) {
        console.error("ERROR in propertyPhotoListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.video.get.list.controller.js.map