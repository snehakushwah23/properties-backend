"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyVideoGetController = propertyVideoGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyVideoGetController(req, res) {
    try {
        const { propertyVideoID } = req.query;
        const propertyVideo = await mongodb_1.PROPERTY_VIDEO.findById(propertyVideoID);
        if (!propertyVideo) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_VIDEO_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_VIDEO_FETCHED, payload: propertyVideo });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.video.get.controller.js.map