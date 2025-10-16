"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubAdminCountController = getSubAdminCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getSubAdminCountController(_req, res) {
    try {
        const count = await mongodb_1.SUB_ADMIN.countDocuments();
        return res.status(200).json({
            message: "Sub-admin count retrieved successfully",
            payload: count
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=dashboard.get.subAdminCount.controller.js.map