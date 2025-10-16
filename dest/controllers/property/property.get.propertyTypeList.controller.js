"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetTypeListController = propertyGetTypeListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyGetTypeListController(req, res) {
    try {
        const { propertyType, page = 1, limit = 10 } = req.query;
        const properties = await mongodb_1.PROPERTY.find({ propertyType })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Property type list retrieved successfully",
            payload: properties
        });
    }
    catch (err) {
        console.error("❌ ERROR in propertyGetTypeListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.propertyTypeList.controller.js.map