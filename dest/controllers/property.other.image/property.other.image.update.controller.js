"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOtherImageUpdateController = propertyOtherImageUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOtherImageUpdateController(req, res) {
    try {
        const { title, propertyOtherImageID } = req.body;
        const propertyOtherImage = await mongodb_1.PROPERTY_OTHER_IMAGE.findById(propertyOtherImageID);
        if (!propertyOtherImage) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND });
        }
        const updatedPropertyOtherImage = await mongodb_1.PROPERTY_OTHER_IMAGE.findByIdAndUpdate(propertyOtherImageID, { title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_UPDATED, payload: updatedPropertyOtherImage });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.other.image.update.controller.js.map