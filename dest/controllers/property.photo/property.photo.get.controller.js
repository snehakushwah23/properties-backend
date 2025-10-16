"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPhotoGetController = propertyPhotoGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyPhotoGetController(req, res) {
    try {
        const { propertyPhotoID } = req.query;
        const propertyPhoto = await mongodb_1.PROPERTY_PHOTO.findById(propertyPhotoID);
        if (!propertyPhoto) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_FETCHED, payload: propertyPhoto });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.photo.get.controller.js.map