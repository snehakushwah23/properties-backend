"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRegionController = updateRegionController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function updateRegionController(req, res) {
    try {
        const { regionID, region } = req.body;
        if (!regionID || !region) {
            return res.status(400).json({ message: "Region ID, City, and updated Region name are required" });
        }
        const updatedRegion = await mongodb_1.PROPERTY_LOCATION_REGION.findByIdAndUpdate(regionID, { region }, { new: true });
        if (!updatedRegion) {
            return res.status(404).json({ message: "Region Not Found" });
        }
        return res.status(200).json({
            message: "Region Updated Successfully",
            payload: updatedRegion
        });
    }
    catch (err) {
        console.error("ERROR in updateRegionController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.region.update.controller.js.map