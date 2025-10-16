"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyCountController = getPropertyCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getPropertyCountController(_req, res) {
    try {
        const count = await mongodb_1.PROPERTY.countDocuments();
        return res.status(200).json({
            message: "Property count retrieved successfully",
            payload: count
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=dashboard.get.propertyCount.controller.js.map