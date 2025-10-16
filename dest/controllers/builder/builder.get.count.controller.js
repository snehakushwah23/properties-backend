"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuilderCount = getBuilderCount;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getBuilderCount(_req, res) {
    try {
        const count = await mongodb_1.BUILDER.countDocuments();
        return res.status(200).json({
            message: "Total builder count retrieved successfully",
            payload: count
        });
    }
    catch (error) {
        console.error("Error fetching builder count:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=builder.get.count.controller.js.map