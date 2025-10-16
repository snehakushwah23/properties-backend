"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityController = getCityController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getCityController(req, res) {
    try {
        const { cityID } = req.query;
        if (!cityID) {
            return res.status(400).json({ message: "City ID is required" });
        }
        const city = await mongodb_1.PROPERTY_LOCATION_CITY.findById(cityID);
        if (!city) {
            return res.status(404).json({ message: "City Not Found" });
        }
        return res.status(200).json({
            message: "City Retrieved Successfully",
            payload: city
        });
    }
    catch (err) {
        console.error("ERROR in getCityController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.city.get.controller.js.map