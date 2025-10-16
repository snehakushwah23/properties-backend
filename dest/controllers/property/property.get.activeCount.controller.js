"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetActiveCountController = propertyGetActiveCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyGetActiveCountController(_req, res) {
    try {
        const count = await mongodb_1.PROPERTY.countDocuments({ status: true });
        return res.status(200).json({
            message: "Active property count retrieved successfully",
            payload: count
        });
    }
    catch (err) {
        console.error("ERROR in propertyGetActiveCountController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.activeCount.controller.js.map