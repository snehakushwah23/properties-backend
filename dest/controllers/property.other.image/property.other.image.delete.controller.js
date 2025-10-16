"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOtherImageDeleteController = propertyOtherImageDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const delete_object_1 = require("../../helpers/delete.object");
async function propertyOtherImageDeleteController(req, res) {
    try {
        const { propertyOtherImageID } = req.body;
        const propertyOtherImage = await mongodb_1.PROPERTY_OTHER_IMAGE.findById(propertyOtherImageID);
        if (!propertyOtherImage) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND });
        }
        const deletedPropertyOtherImage = await mongodb_1.PROPERTY_OTHER_IMAGE.findByIdAndDelete(propertyOtherImageID);
        await (0, delete_object_1.deleteObject)(deletedPropertyOtherImage?.image.key);
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_DELETED, payload: propertyOtherImage });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.other.image.delete.controller.js.map