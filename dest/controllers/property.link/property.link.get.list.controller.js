"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyLinkListController = propertyLinkListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyLinkListController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }
        const propertyLink = await mongodb_1.PROPERTY_LINK.find({ propertyID });
        if (!propertyLink.length) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_LINK_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_LINK_FETCHED,
            payload: propertyLink
        });
    }
    catch (err) {
        console.error("ERROR in propertyPhotoListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.link.get.list.controller.js.map