"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetCountController = propertyGetCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyGetCountController(_req, res) {
    try {
        const count = await mongodb_1.PROPERTY.countDocuments();
        return res.status(200).json({
            message: "Total property count retrieved successfully",
            payload: count
        });
    }
    catch (err) {
        console.error("ERROR in propertyGetCountController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.count.controller.js.map