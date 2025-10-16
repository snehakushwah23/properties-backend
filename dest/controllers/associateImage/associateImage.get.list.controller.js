"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssociateImageListController = getAssociateImageListController;
const mongodb_1 = require("../../services/mongodb");
async function getAssociateImageListController(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const images = await mongodb_1.ASSOCIATE_IMAGE.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: "Associate images list retrieved successfully",
            payload: { imagesList: images }
        });
    }
    catch (err) {
        return res.status(500).json({ error: "Execution failed" });
    }
}
//# sourceMappingURL=associateImage.get.list.controller.js.map