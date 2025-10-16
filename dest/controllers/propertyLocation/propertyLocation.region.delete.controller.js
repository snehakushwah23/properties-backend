"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRegionController = deleteRegionController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function deleteRegionController(req, res) {
    try {
        const { regionID } = req.body;
        if (!regionID) {
            return res.status(400).json({ message: "Region ID is required" });
        }
        const deletedRegion = await mongodb_1.PROPERTY_LOCATION_REGION.findByIdAndDelete(regionID);
        if (!deletedRegion) {
            return res.status(404).json({ message: "Region Not Found" });
        }
        return res.status(200).json({
            message: "Region Deleted Successfully"
        });
    }
    catch (err) {
        console.error("ERROR in deleteRegionController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyLocation.region.delete.controller.js.map