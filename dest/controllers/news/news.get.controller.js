"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsGetController = newsGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function newsGetController(req, res) {
    try {
        const { newsID } = req.query;
        const news = await mongodb_1.NEWS.findById(newsID);
        if (!news) {
            return res.status(404).json({ message: response_messages_1.responseMessages.NEWS_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.NEWS_FETCHED, payload: news });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.get.controller.js.map