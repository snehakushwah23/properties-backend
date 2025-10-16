"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuilderActivePropertyCount = getBuilderActivePropertyCount;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getBuilderActivePropertyCount(req, res) {
    try {
        const { builderID } = req.query;
        if (!builderID) {
            return res.status(400).json({ error: "Builder ID is required" });
        }
        const count = await mongodb_1.PROPERTY.countDocuments({ builderID, status: true });
        return res.status(200).json({
            message: "Builder active property count retrieved successfully",
            payload: count
        });
    }
    catch (error) {
        console.error("Error fetching active property count:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=getBuilderActivePropertyCount.controller.js.map