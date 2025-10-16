"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyDeleteController = propertyDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyDeleteController(req, res) {
    try {
        const { propertyID } = req.body;
        const property = await mongodb_1.PROPERTY.findById(propertyID);
        if (!property) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_NOT_FOUND });
        }
        const deletedProperty = await mongodb_1.PROPERTY.findByIdAndDelete(propertyID);
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_DELETED, payload: deletedProperty });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.delete.controller.js.map