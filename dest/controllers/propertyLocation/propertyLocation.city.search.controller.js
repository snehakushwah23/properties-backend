"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCityController = searchCityController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function searchCityController(req, res) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;
        if (!search) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const cities = await mongodb_1.PROPERTY_LOCATION_CITY.find({ city: { $regex: search, $options: "i" } })
            .sort({ city: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "City Search Results Retrieved Successfully",
            payload: cities
        });
    }
    catch (err) {
        console.error("ERROR in searchCityController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.city.search.controller.js.map