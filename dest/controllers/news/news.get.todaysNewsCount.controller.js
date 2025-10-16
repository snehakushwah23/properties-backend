"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsGetTodaysCountController = newsGetTodaysCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function newsGetTodaysCountController(_req, res) {
    try {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        const todaysCount = await mongodb_1.NEWS.countDocuments({
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });
        return res.status(200).json({
            message: "Today's news count retrieved successfully",
            payload: todaysCount
        });
    }
    catch (err) {
        console.error("❌ ERROR in newsGetTodaysCountController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.get.todaysNewsCount.controller.js.map