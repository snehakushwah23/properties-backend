"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCityController = deleteCityController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function deleteCityController(req, res) {
    try {
        const { cityID } = req.body;
        if (!cityID) {
            return res.status(400).json({ message: "City ID is required" });
        }
        const deletedCity = await mongodb_1.PROPERTY_LOCATION_CITY.findByIdAndDelete(cityID);
        if (!deletedCity) {
            return res.status(404).json({ message: "City Not Found" });
        }
        return res.status(200).json({
            message: "City Deleted Successfully"
        });
    }
    catch (err) {
        console.error("❌ ERROR in deleteCityController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.city.delete.controller.js.map