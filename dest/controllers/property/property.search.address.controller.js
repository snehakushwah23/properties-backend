"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertySearchByAddressController = propertySearchByAddressController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertySearchByAddressController(req, res) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;
        const properties = await mongodb_1.PROPERTY.find({
            address: { $regex: new RegExp(search, "i") }
        })
            .sort({ address: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Property search by address retrieved successfully",
            payload: properties
        });
    }
    catch (err) {
        console.error("❌ ERROR in propertySearchByAddressController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.search.address.controller.js.map