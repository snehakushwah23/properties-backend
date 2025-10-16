"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPhotoUpdateController = propertyPhotoUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyPhotoUpdateController(req, res) {
    try {
        const { title, propertyPhotoID } = req.body;
        const propertyPhoto = await mongodb_1.PROPERTY_PHOTO.findById(propertyPhotoID);
        if (!propertyPhoto) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_NOT_FOUND });
        }
        const updatedPropertyPhoto = await mongodb_1.PROPERTY_PHOTO.findByIdAndUpdate(propertyPhotoID, { title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_UPDATED, payload: updatedPropertyPhoto });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.photo.update.controller.js.map