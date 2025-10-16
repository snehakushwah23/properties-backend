"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likedPropertyDeleteController = likedPropertyDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function likedPropertyDeleteController(req, res) {
    try {
        const { propertyID } = req.body;
        const { accessToken } = req;
        const isLikedPropertyExists = await mongodb_1.LINKED_PROPERTY.findOne({ propertyID, customerID: accessToken.ID });
        if (!isLikedPropertyExists) {
            return res.status(404).json({ message: response_messages_1.responseMessages.LINKED_PROPERTY_NOT_FOUND });
        }
        const deletedLikedProperty = await mongodb_1.LINKED_PROPERTY.findByIdAndDelete(isLikedPropertyExists._id);
        return res.status(200).json({ message: response_messages_1.responseMessages.LINKED_PROPERTY_DELETED, payload: deletedLikedProperty });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=linked.property.delete.controller.js.map