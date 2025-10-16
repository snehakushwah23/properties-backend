"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebsiteHomePageFeaturedImageListController = getWebsiteHomePageFeaturedImageListController;
const mongodb_1 = require("../../services/mongodb");
async function getWebsiteHomePageFeaturedImageListController(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const images = await mongodb_1.WEBSITE_HOME_PAGE_FEATURED_IMAGE.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Website featured images list retrieved successfully",
            payload: { imagesList: images }
        });
    }
    catch (err) {
        return res.status(500).json({ error: "Execution failed" });
    }
}
//# sourceMappingURL=websiteHomePageFeaturedImage.get.list.controller.js.map