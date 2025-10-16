"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCityController = createCityController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function createCityController(req, res) {
    try {
        const { city } = req.body;
        if (!city) {
            return res.status(400).json({ message: "City name is required" });
        }
        const newCity = await mongodb_1.PROPERTY_LOCATION_CITY.create({ city });
        return res.status(201).json({
            message: "City Created Successfully",
            payload: newCity
        });
    }
    catch (err) {
        console.error("ERROR in createCityController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.city.create.controller.js.map