"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsCreateController = newsCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function newsCreateController(req, res) {
    try {
        const { description, bankID, builderID, city, link, title, propertyID } = req.body;
        const newsThumbnailObject = await (0, upload_object_image_1.uploadObjectImage)('news-thumbnail', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdBuilder = await mongodb_1.NEWS.create({ description, bankID, builderID, city, link, thumbnail: newsThumbnailObject, title, propertyID });
        return res.status(200).json({ message: response_messages_1.responseMessages.NEWS_CREATED, payload: createdBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=news.create.controller.js.map