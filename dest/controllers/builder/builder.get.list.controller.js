"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderGetListController = builderGetListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function builderGetListController(req, res) {
    try {
        const { page, limit } = req.query;
        const builderList = await mongodb_1.BUILDER.find()
            .sort({ _id: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({ message: response_messages_1.responseMessages.BUILDERS_LIST_FETCHED, payload: builderList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=builder.get.list.controller.js.map