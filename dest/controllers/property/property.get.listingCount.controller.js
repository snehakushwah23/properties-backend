"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetListingCountController = propertyGetListingCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyGetListingCountController(_req, res) {
    try {
        const count = await mongodb_1.PROPERTY.countDocuments({ listing: true });
        return res.status(200).json({
            message: "Property listing count retrieved successfully",
            payload: count
        });
    }
    catch (err) {
        console.error("ERROR in propertyGetListingCountController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.listingCount.controller.js.map