"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityFeaturedImageCountController = getCityFeaturedImageCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getCityFeaturedImageCountController(_req, res) {
    try {
        const totalCount = await mongodb_1.CITY_FEATURED_IMAGE.countDocuments();
        return res.status(200).json({
            message: response_messages_1.responseMessages.IMAGE_COUNT_FETCHED,
            payload: { totalCount },
        });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=cityFeaturedImage.getCount.controller.js.map