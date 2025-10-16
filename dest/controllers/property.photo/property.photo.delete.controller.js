"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPhotoDeleteController = propertyPhotoDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const delete_object_1 = require("../../helpers/delete.object");
async function propertyPhotoDeleteController(req, res) {
    try {
        const { propertyPhotoID } = req.body;
        const propertyPhoto = await mongodb_1.PROPERTY_PHOTO.findById(propertyPhotoID);
        if (!propertyPhoto) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_NOT_FOUND });
        }
        const deletedPropertyPDF = await mongodb_1.PROPERTY_PHOTO.findByIdAndDelete(propertyPhotoID);
        await (0, delete_object_1.deleteObject)(deletedPropertyPDF?.photo.key);
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_PHOTO_DELETED, payload: propertyPhoto });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.photo.delete.controller.js.map