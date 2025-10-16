"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuilderAndDeveloperListController = getBuilderAndDeveloperListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getBuilderAndDeveloperListController(_req, res) {
    try {
        const builders = await mongodb_1.BUILDER.find({}, { name: 1, logo: 1, _id: 1 });
        return res.status(200).json({
            message: "Builder and Developer List Retrieved Successfully",
            payload: builders
        });
    }
    catch (err) {
        console.error("ERROR in getBuilderAndDeveloperListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=homepage.getBuilderAndDeveloperList.controller.js.map