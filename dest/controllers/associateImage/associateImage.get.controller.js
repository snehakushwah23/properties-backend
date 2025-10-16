"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssociateImageController = getAssociateImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getAssociateImageController(req, res) {
    try {
        const { imageID } = req.query;
        const image = await mongodb_1.ASSOCIATE_IMAGE.findById(imageID);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        return res.status(200).json({
            message: "Associate image retrieved successfully",
            payload: image
        });
    }
    catch (err) {
        console.error("ERROR:" + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=associateImage.get.controller.js.map