"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetByLatLngController = propertyGetByLatLngController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyGetByLatLngController(req, res) {
    try {
        const { southWestLat, southWestLng, northEastLat, northEastLng, cityName, region, page = 1, limit = 10 } = req.query;
        const properties = await mongodb_1.PROPERTY.find({
            city: cityName,
            region: region,
            "location.lat": { $gte: Number(southWestLat), $lte: Number(northEastLat) },
            "location.lng": { $gte: Number(southWestLng), $lte: Number(northEastLng) }
        })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Properties retrieved successfully",
            payload: properties
        });
    }
    catch (err) {
        console.error("ERROR in propertyGetByLatLngController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.propertyByLatitudeAndLongitude.controller.js.map