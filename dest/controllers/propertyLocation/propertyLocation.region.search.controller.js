"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRegionController = searchRegionController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function searchRegionController(req, res) {
    try {
        const { search, page = 1, limit = 10, order = "asc", cityID } = req.query;
        if (!search) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const query = {
            region: { $regex: search, $options: "i" }
        };
        if (cityID) {
            query.city = cityID;
        }
        const regions = await mongodb_1.PROPERTY_LOCATION_REGION.find(query)
            .sort({ region: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Region Search Results Retrieved Successfully",
            payload: regions
        });
    }
    catch (err) {
        console.error("ERROR in searchRegionController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.region.search.controller.js.map