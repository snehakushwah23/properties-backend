"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertySearchByReraIDController = propertySearchByReraIDController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertySearchByReraIDController(req, res) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;
        const properties = await mongodb_1.PROPERTY.find({
            reraID: { $regex: new RegExp(search, "i") }
        })
            .sort({ reraID: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Property search by RERA ID retrieved successfully",
            payload: properties
        });
    }
    catch (err) {
        console.error("❌ ERROR in propertySearchByReraIDController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.search.reraID.controller.js.map