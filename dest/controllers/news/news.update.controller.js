"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsUpdateController = newsUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function newsUpdateController(req, res) {
    try {
        const { newsID, description, city, link, title } = req.body;
        const news = await mongodb_1.NEWS.findById(newsID);
        if (!news) {
            return res.status(404).json({ message: response_messages_1.responseMessages.NEWS_NOT_FOUND });
        }
        const updatedNews = await mongodb_1.NEWS.findByIdAndUpdate(newsID, { description, city, link, title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.NEWS_UPDATED, payload: updatedNews });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.update.controller.js.map