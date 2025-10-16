"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegionListController = getRegionListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getRegionListController(req, res) {
    try {
        const { page = 1, limit = 10, order = "asc", city } = req.query;
        const query = {};
        if (city) {
            query.city = city;
        }
        const regions = await mongodb_1.PROPERTY_LOCATION_REGION.find(query)
            .sort({ region: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Region List Retrieved Successfully",
            payload: regions
        });
    }
    catch (err) {
        console.error("ERROR in getRegionListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.region.getList.controller.js.map