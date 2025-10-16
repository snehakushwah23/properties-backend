"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyVideoUpdateController = propertyVideoUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyVideoUpdateController(req, res) {
    try {
        const { title, propertyVideoID } = req.body;
        const propertyVideo = await mongodb_1.PROPERTY_VIDEO.findById(propertyVideoID);
        if (!propertyVideo) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_VIDEO_NOT_FOUND });
        }
        const updatedPropertyVideo = await mongodb_1.PROPERTY_VIDEO.findByIdAndUpdate(propertyVideoID, { title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_VIDEO_UPDATED, payload: updatedPropertyVideo });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.video.update.controller.js.map