"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsSearchTitleController = newsSearchTitleController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function newsSearchTitleController(req, res) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;
        if (!search) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const newsList = await mongodb_1.NEWS.find({ title: { $regex: search, $options: "i" } })
            .sort({ title: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "News search results retrieved successfully",
            payload: newsList
        });
    }
    catch (err) {
        console.error("ERROR in newsSearchTitleController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.search.title.controller.js.map