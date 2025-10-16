"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderDeleteController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const delete_object_1 = require("../../helpers/delete.object");
async function builderDeleteController(req, res) {
    try {
        const { builderID } = req.body;
        const builder = await mongodb_1.BUILDER.findById(builderID);
        if (!builder) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BUILDER_NOT_FOUND });
        }
        const deletedBuilder = await mongodb_1.BUILDER.findByIdAndDelete(builderID);
        await (0, delete_object_1.deleteObject)(deletedBuilder?.logo.key);
        return res.status(200).json({ message: response_messages_1.responseMessages.BUILDER_DELETED, payload: deletedBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.builderDeleteController = builderDeleteController;
//# sourceMappingURL=property.buy.delete.controller.js.map