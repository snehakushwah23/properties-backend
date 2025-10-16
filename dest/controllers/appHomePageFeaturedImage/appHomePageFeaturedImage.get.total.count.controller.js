"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppHomePageFeaturedImageTotalCountController = getAppHomePageFeaturedImageTotalCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getAppHomePageFeaturedImageTotalCountController(_req, res) {
    try {
        const totalCount = await mongodb_1.APP_HOME_PAGE_FEATURED_IMAGE.countDocuments();
        return res.status(200).json({
            message: "Total featured image count retrieved successfully",
            payload: totalCount
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=appHomePageFeaturedImage.get.total.count.controller.js.map