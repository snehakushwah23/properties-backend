"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertySearchByCityController = propertySearchByCityController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertySearchByCityController(req, res) {
    try {
        const { search = "", page = "1", limit = "10", order = "asc" } = req.query;
        const isValidNumber = (num) => !isNaN(num) && Number(num) > 0;
        const pageNumber = isValidNumber(page) ? Number(page) : 1;
        const limitNumber = isValidNumber(limit) ? Number(limit) : 10;
        const skip = (pageNumber - 1) * limitNumber;
        const filters = {};
        if (search) {
            filters.city = { $regex: new RegExp(search, "i") };
        }
        const properties = await mongodb_1.PROPERTY.aggregate([
            { $match: filters },
            {
                $facet: {
                    hotProperties: [
                        { $match: { isHotProperty: true } },
                        { $sort: { city: order === "asc" ? 1 : -1 } }
                    ],
                    otherProperties: [
                        { $match: { isHotProperty: { $ne: true } } },
                        { $sort: { city: order === "asc" ? 1 : -1 } },
                        { $skip: skip },
                        { $limit: limitNumber }
                    ]
                }
            }
        ]);
        const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
        let hotProperties = properties.length ? properties[0].hotProperties : [];
        let otherProperties = properties.length ? properties[0].otherProperties : [];
        hotProperties = shuffleArray(hotProperties);
        otherProperties = shuffleArray(otherProperties);
        const shuffledProperties = [...hotProperties, ...otherProperties];
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_FETCHED,
            payload: shuffledProperties,
            pagination: {
                page: pageNumber,
                limit: limitNumber
            }
        });
    }
    catch (err) {
        console.error("❌ ERROR in propertySearchByCityController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.search.city.controller.js.map