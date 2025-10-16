"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsGetTotalCountController = newsGetTotalCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function newsGetTotalCountController(_req, res) {
    try {
        const totalCount = await mongodb_1.NEWS.countDocuments();
        return res.status(200).json({
            message: "Total news count retrieved successfully",
            payload: totalCount
        });
    }
    catch (err) {
        console.error("ERROR in newsGetTotalCountController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.get.totalCount.controller.js.map