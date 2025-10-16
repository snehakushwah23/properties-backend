"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetLocalityAndBuilderController = propertyGetLocalityAndBuilderController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyGetLocalityAndBuilderController(req, res) {
    try {
        const { city, search, page = 1, limit = 10 } = req.query;
        const searchTerm = search ? search.toString().trim() : "";
        const skip = (Number(page) - 1) * Number(limit);
        const propertyQuery = {};
        const strictRegionQuery = {};
        const strictRegionWithoutCityQuery = {};
        const builderQuery = {};
        const cityQuery = {};
        if (city) {
            strictRegionQuery.city = city;
            propertyQuery.city = city;
        }
        if (searchTerm) {
            propertyQuery.name = { $regex: new RegExp(searchTerm, "i") };
        }
        if (searchTerm) {
            strictRegionQuery.region = { $regex: new RegExp("^" + searchTerm, "i") };
        }
        if (searchTerm) {
            strictRegionWithoutCityQuery.region = { $regex: new RegExp("^" + searchTerm, "i") };
        }
        if (searchTerm) {
            builderQuery.name = { $regex: new RegExp("^" + searchTerm, "i") };
        }
        if (searchTerm) {
            cityQuery.city = { $regex: new RegExp(searchTerm, "i") };
        }
        const [properties, strictRegions, strictRegionsWithoutCity, builders, cities] = await Promise.all([
            mongodb_1.PROPERTY.find(propertyQuery).skip(skip).limit(Number(limit)),
            mongodb_1.PROPERTY_LOCATION_REGION.find(strictRegionQuery).skip(skip).limit(Number(limit)),
            mongodb_1.PROPERTY_LOCATION_REGION.find(strictRegionWithoutCityQuery).skip(skip).limit(Number(limit)),
            mongodb_1.BUILDER.find(builderQuery).skip(skip).limit(Number(limit)),
            mongodb_1.PROPERTY_LOCATION_CITY.find(cityQuery).skip(skip).limit(Number(limit)),
        ]);
        const payload = [
            ...properties.map(p => ({ _id: p._id, name: p.name, city: p.city, type: "P" })),
            ...strictRegions.map(loc => ({ _id: loc._id, name: loc.region, city: loc.city, type: "L" })),
            ...builders.map(builder => ({ _id: builder._id, name: builder.name, city: null, type: "B" })),
            ...cities.map(ct => ({ _id: ct._id, name: ct.city, city: ct.city, type: "C" })),
            ...strictRegionsWithoutCity.map(region => ({ _id: region._id, name: region.region, city: region.city, type: "R" })),
        ];
        return res.status(200).json({
            message: "Property Locality And Builder List By City Fetched",
            payload,
        });
    }
    catch (err) {
        console.error("❌ ERROR in propertyGetLocalityAndBuilderController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.propertyLocalityAndBuilderByCityAndSearch.controller.js.map