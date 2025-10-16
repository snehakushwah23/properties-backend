"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSliderImagesController = getSliderImagesController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getSliderImagesController(_req, res) {
    try {
        const sliderImages = await mongodb_1.WEBSITE_HOME_PAGE_FEATURED_IMAGE.find({}, { image: 1 });
        return res.status(200).json({
            message: "Slider Images Retrieved Successfully",
            payload: sliderImages
        });
    }
    catch (err) {
        console.error("❌ ERROR in getSliderImagesController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=homepage.getSliderImages.controller.js.map