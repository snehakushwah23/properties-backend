"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsGetSearchController = newsGetSearchController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function newsGetSearchController(req, res) {
    try {
        const { search } = req.query;
        if (!search) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const newsList = await mongodb_1.NEWS.find({ title: { $regex: search, $options: "i" } });
        return res.status(200).json({
            message: "News search results retrieved successfully",
            payload: newsList
        });
    }
    catch (err) {
        console.error("ERROR in newsGetSearchController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.get.search.controller.js.map