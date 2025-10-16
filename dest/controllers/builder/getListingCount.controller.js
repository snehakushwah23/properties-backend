"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingCount = getListingCount;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getListingCount(_req, res) {
    try {
        const count = await mongodb_1.PROPERTY.countDocuments({ listing: true });
        return res.status(200).json({
            message: "Total listing count retrieved successfully",
            payload: count
        });
    }
    catch (error) {
        console.error("Error fetching listing count:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=getListingCount.controller.js.map