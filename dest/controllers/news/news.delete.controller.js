"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsDeleteController = newsDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const delete_object_1 = require("../../helpers/delete.object");
async function newsDeleteController(req, res) {
    try {
        const { newsID } = req.body;
        const news = await mongodb_1.NEWS.findById(newsID);
        if (!news) {
            return res.status(404).json({ message: response_messages_1.responseMessages.NEWS_NOT_FOUND });
        }
        await (0, delete_object_1.deleteObject)(news?.thumbnail.Key);
        const deletedNews = await mongodb_1.NEWS.findByIdAndDelete(newsID);
        return res.status(200).json({ message: response_messages_1.responseMessages.NEWS_DELETED, payload: deletedNews });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.delete.controller.js.map