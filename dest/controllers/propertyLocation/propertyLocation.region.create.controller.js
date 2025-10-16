"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegionController = createRegionController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function createRegionController(req, res) {
    try {
        const { city, region } = req.body;
        if (!city || !region) {
            return res.status(400).json({ message: "City and Region are required" });
        }
        const newRegion = await mongodb_1.PROPERTY_LOCATION_REGION.create({ city, region });
        return res.status(201).json({
            message: "Region Created Successfully",
            payload: newRegion
        });
    }
    catch (err) {
        console.error("ERROR in createRegionController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.region.create.controller.js.map