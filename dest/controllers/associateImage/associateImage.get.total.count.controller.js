"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssociateImageTotalCountController = getAssociateImageTotalCountController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getAssociateImageTotalCountController(_req, res) {
    try {
        const totalCount = await mongodb_1.ASSOCIATE_IMAGE.countDocuments();
        return res.status(200).json({
            message: "Total associate image count retrieved successfully",
            payload: totalCount
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=associateImage.get.total.count.controller.js.map