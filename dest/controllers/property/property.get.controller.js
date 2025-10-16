"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetController = propertyGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyGetController(req, res) {
    try {
        const { propertyID } = req.query;
        const property = await mongodb_1.PROPERTY.findById(propertyID);
        if (!property) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_FETCHED, payload: property });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.controller.js.map