"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesList = getPropertiesList;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getPropertiesList(req, res) {
    try {
        const { page = 1, limit = 10, builderID } = req.query;
        if (!builderID) {
            return res.status(400).json({ error: "Builder ID is required" });
        }
        const properties = await mongodb_1.PROPERTY.find({ builderID })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Builder properties list retrieved successfully",
            payload: properties
        });
    }
    catch (error) {
        console.error("Error fetching properties list:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=getPropertiesList.controller.js.map