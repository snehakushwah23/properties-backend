"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyGetByFilterController = propertyGetByFilterController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyGetByFilterController(req, res) {
    try {
        const { propertyType, projectStatus, propertyTier, propertyOptions, propertyVariation, sroPromoter, isBankAPF, limit = 10, page = 1 } = req.query;
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
        if (isBankAPF)
            filters.isBankAPF = isBankAPF === "true";
        const properties = await mongodb_1.PROPERTY.find(filters)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Properties retrieved successfully",
            payload: properties
        });
    }
    catch (err) {
        console.error("ERROR in propertyGetByFilterController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.get.propertyByFilter.controller.js.map