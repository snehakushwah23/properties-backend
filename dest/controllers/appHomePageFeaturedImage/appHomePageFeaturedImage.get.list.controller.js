"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppHomePageFeaturedImageListController = getAppHomePageFeaturedImageListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getAppHomePageFeaturedImageListController(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const images = await mongodb_1.APP_HOME_PAGE_FEATURED_IMAGE.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Featured images list retrieved successfully",
            payload: images
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=appHomePageFeaturedImage.get.list.controller.js.map