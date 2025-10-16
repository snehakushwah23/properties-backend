"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsUpdateThumbnailController = newsUpdateThumbnailController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function newsUpdateThumbnailController(req, res) {
    try {
        const { newsID } = req.body;
        if (!newsID || !req.file) {
            return res.status(400).json({ message: "News ID and thumbnail are required" });
        }
        const updatedNews = await mongodb_1.NEWS.findByIdAndUpdate(newsID, { thumbnail: req.file }, { new: true });
        if (!updatedNews) {
            return res.status(404).json({ message: response_messages_1.responseMessages.NEWS_NOT_FOUND });
        }
        return res.status(200).json({
            message: "News thumbnail updated successfully",
            payload: updatedNews
        });
    }
    catch (err) {
        console.error("ERROR in newsUpdateThumbnailController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.update.thumbnail.controller.js.map