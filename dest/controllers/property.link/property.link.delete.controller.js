"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyLinkDeleteController = propertyLinkDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyLinkDeleteController(req, res) {
    try {
        const { propertyLinkID } = req.body;
        const propertyLink = await mongodb_1.PROPERTY_LINK.findById(propertyLinkID);
        if (!propertyLink) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_LINK_NOT_FOUND });
        }
        const deletedPropertyLink = await mongodb_1.PROPERTY_LINK.findByIdAndDelete(propertyLinkID);
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_LINK_DELETED, payload: deletedPropertyLink });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.link.delete.controller.js.map