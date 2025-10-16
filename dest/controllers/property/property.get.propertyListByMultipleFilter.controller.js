"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetListByMultipleFilterController = propertyGetListByMultipleFilterController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyGetListByMultipleFilterController(req, res) {
    try {
        const { propertyType, projectStatus, propertyTier, propertyOptions, propertyVariation, sroPromoter, bankAPFBankNames, city, plotArea, region, limit = 10, page = 1 } = req.query;
        const filters = {};
        if (propertyType)
            filters.propertyType = propertyType;
        if (projectStatus)
            filters.projectStatus = projectStatus;
        if (propertyTier)
            filters.propertyTier = propertyTier;
        if (propertyOptions)
            filters.propertyOptions = propertyOptions;
        if (propertyVariation)
            filters.propertyVariation = propertyVariation;
        if (sroPromoter)
            filters.sroPromoter = sroPromoter;
        if (bankAPFBankNames)
            filters.bankAPFBankNames = bankAPFBankNames;
        if (city)
            filters.city = city;
        if (region)
            filters.region = region;
        if (plotArea)
            filters.plotArea = Number(plotArea);
        const properties = await mongodb_1.PROPERTY.find(filters)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Properties retrieved successfully",
            payload: properties
        });
    }
    catch (err) {
        console.error("❌ ERROR in propertyGetListByMultipleFilterController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.propertyListByMultipleFilter.controller.js.map