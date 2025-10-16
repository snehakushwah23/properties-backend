"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCityController = updateCityController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function updateCityController(req, res) {
    try {
        const { cityID, city } = req.body;
        if (!cityID || !city) {
            return res.status(400).json({ message: "City ID and updated city name are required" });
        }
        const updatedCity = await mongodb_1.PROPERTY_LOCATION_CITY.findByIdAndUpdate(cityID, { city }, { new: true });
        if (!updatedCity) {
            return res.status(404).json({ message: "City Not Found" });
        }
        return res.status(200).json({
            message: "City Updated Successfully",
            payload: updatedCity
        });
    }
    catch (err) {
        console.error("ERROR in updateCityController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.city.update.controller.js.map