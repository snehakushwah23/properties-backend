"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderGetController = builderGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function builderGetController(req, res) {
    try {
        const { builderID } = req.query;
        const builder = await mongodb_1.BUILDER.findById(builderID);
        if (!builder) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BUILDER_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.BUILDER_FETCHED, payload: builder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=builder.get.controller.js.map