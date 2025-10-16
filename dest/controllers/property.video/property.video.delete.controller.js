"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyVideoDeleteController = propertyVideoDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const delete_object_1 = require("../../helpers/delete.object");
async function propertyVideoDeleteController(req, res) {
    try {
        const { propertyVideoID } = req.body;
        const propertyVideo = await mongodb_1.PROPERTY_VIDEO.findById(propertyVideoID);
        if (!propertyVideo) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_VIDEO_NOT_FOUND });
        }
        const deletedPropertyPDF = await mongodb_1.PROPERTY_VIDEO.findByIdAndDelete(propertyVideoID);
        await (0, delete_object_1.deleteObject)(propertyVideo?.video.Key);
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_VIDEO_DELETED, payload: deletedPropertyPDF });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.video.delete.controller.js.map