"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyCountForLatAndLongController = propertyCountForLatAndLongController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyCountForLatAndLongController(req, res) {
    try {
        const { southWestLat, southWestLng, northEastLat, northEastLng, cityName, region } = req.query;
        const count = await mongodb_1.PROPERTY.countDocuments({
            city: cityName,
            region: region,
            "location.lat": { $gte: Number(southWestLat), $lte: Number(northEastLat) },
            "location.lng": { $gte: Number(southWestLng), $lte: Number(northEastLng) }
        });
        return res.status(200).json({
            message: "Property count for given coordinates retrieved successfully",
            payload: count
        });
    }
    catch (err) {
        console.error("ERROR in propertyCountForLatAndLongController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.propertyCountForLatAndLong.controller.js.map