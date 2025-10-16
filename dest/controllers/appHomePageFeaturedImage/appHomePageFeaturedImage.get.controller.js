"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppHomePageFeaturedImageController = getAppHomePageFeaturedImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getAppHomePageFeaturedImageController(req, res) {
    try {
        const { imageID } = req.query;
        if (!imageID) {
            return res.status(400).json({ message: "Image ID is required" });
        }
        const image = await mongodb_1.APP_HOME_PAGE_FEATURED_IMAGE.findById(imageID);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        return res.status(200).json({
            message: "Featured image retrieved successfully",
            payload: image
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=appHomePageFeaturedImage.get.controller.js.map