"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompressedPropertiesList = getCompressedPropertiesList;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getCompressedPropertiesList(req, res) {
    try {
        const { builderID } = req.query;
        if (!builderID) {
            return res.status(400).json({ error: "Builder ID is required" });
        }
        const properties = await mongodb_1.PROPERTY.find({ builderID }).select("_id name location price");
        return res.status(200).json({
            message: "Compressed properties list retrieved successfully",
            payload: properties
        });
    }
    catch (error) {
        console.error("Error fetching compressed properties list:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=getCompressedPropertiesList.controller.js.map