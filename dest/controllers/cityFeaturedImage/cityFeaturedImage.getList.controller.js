"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityFeaturedImageListController = getCityFeaturedImageListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getCityFeaturedImageListController(req, res) {
    try {
        const { page, limit, cityID } = req.query;
        const pageNumber = Math.max(1, Number(page) || 1);
        const limitNumber = Math.max(1, Number(limit) || 10);
        const cityImages = await mongodb_1.CITY_FEATURED_IMAGE.find({ cityID })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);
        return res.status(200).json({
            message: response_messages_1.responseMessages.IMAGE_LIST_FETCHED,
            payload: {
                imagesList: cityImages,
            },
        });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=cityFeaturedImage.getList.controller.js.map