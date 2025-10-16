"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBankCountController = getBankCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getBankCountController(_req, res) {
    try {
        const count = await mongodb_1.BANK.countDocuments();
        return res.status(200).json({
            message: "Bank count retrieved successfully",
            payload: count
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=dashboard.get.bankCount.controller.js.map