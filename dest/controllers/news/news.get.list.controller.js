"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsGetListController = newsGetListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function newsGetListController(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const newsList = await mongodb_1.NEWS.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .sort({ createdAt: -1 });
        return res.status(200).json({
            message: "News list retrieved successfully",
            payload: newsList
        });
    }
    catch (err) {
        console.error("ERROR in newsGetListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.get.list.controller.js.map