"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyLinkCreateController = propertyLinkCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyLinkCreateController(req, res) {
    try {
        const { link, propertyID, title, description } = req.body;
        const createdLink = await mongodb_1.PROPERTY_LINK.create({ link, propertyID, title, description });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_LINK_CREATED, payload: createdLink });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.link.create.controller.js.map