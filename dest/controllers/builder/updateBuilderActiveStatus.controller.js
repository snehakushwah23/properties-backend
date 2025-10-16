"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBuilderActiveStatus = updateBuilderActiveStatus;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function updateBuilderActiveStatus(req, res) {
    try {
        const { builderID, status } = req.body;
        if (!builderID || typeof status !== "boolean") {
            return res.status(400).json({ error: "Builder ID and status are required" });
        }
        const updatedBuilder = await mongodb_1.BUILDER.findByIdAndUpdate(builderID, { status }, { new: true });
        return res.status(200).json({
            message: "Builder active status updated successfully",
            payload: updatedBuilder
        });
    }
    catch (error) {
        console.error("Error updating builder status:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=updateBuilderActiveStatus.controller.js.map