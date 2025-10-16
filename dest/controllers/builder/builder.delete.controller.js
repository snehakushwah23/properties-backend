"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderDeleteController = builderDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const mongodb_2 = require("../../services/mongodb");
async function builderDeleteController(req, res) {
    try {
        const { builderID } = req.body;
        const builder = await mongodb_1.BUILDER.findById(builderID);
        if (!builder) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BUILDER_NOT_FOUND });
        }
        const deletedProperties = await mongodb_2.PROPERTY.deleteMany({ builderID });
        const deletedBuilder = await mongodb_1.BUILDER.findByIdAndDelete(builderID);
        return res.status(200).json({ message: response_messages_1.responseMessages.BUILDER_DELETED, payload: deletedBuilder, deletedProperties });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=builder.delete.controller.js.map