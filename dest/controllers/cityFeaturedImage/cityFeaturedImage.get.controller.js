"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityFeaturedImageController = getCityFeaturedImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getCityFeaturedImageController(req, res) {
    try {
        const { imageID } = req.query;
        const cityImage = await mongodb_1.CITY_FEATURED_IMAGE.findById(imageID);
        if (!cityImage) {
            return res.status(404).json({ message: response_messages_1.responseMessages.IMAGE_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.IMAGE_FETCHED,
            payload: cityImage,
        });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=cityFeaturedImage.get.controller.js.map