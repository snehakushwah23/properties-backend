"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyLinkUpdateController = propertyLinkUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyLinkUpdateController(req, res) {
    try {
        const { link, title, propertyLinkID } = req.body;
        const propertyLink = await mongodb_1.PROPERTY_LINK.findById(propertyLinkID);
        if (!propertyLink) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_LINK_NOT_FOUND });
        }
        const updatedLink = await mongodb_1.PROPERTY_LINK.findByIdAndUpdate(propertyLinkID, { link, title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_LINK_UPDATED, payload: updatedLink });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.link.update.controller.js.map