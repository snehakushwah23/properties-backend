"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityListController = getCityListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getCityListController(req, res) {
    try {
        const { page = 1, limit = 10, order = "asc" } = req.query;
        const cities = await mongodb_1.PROPERTY_LOCATION_CITY.find()
            .sort({ city: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "City List Retrieved Successfully",
            payload: cities
        });
    }
    catch (err) {
        console.error("ERROR in getCityListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.city.getList.controller.js.map