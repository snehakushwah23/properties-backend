"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOtherImageGetController = propertyOtherImageGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOtherImageGetController(req, res) {
    try {
        const { propertyOtherImageID } = req.query;
        const propertyOtherImage = await mongodb_1.PROPERTY_OTHER_IMAGE.findById(propertyOtherImageID);
        if (!propertyOtherImage) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_FETCHED, payload: propertyOtherImage });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.other.image.get.controller.js.map