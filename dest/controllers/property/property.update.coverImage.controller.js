"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyUpdateCoverImageController = propertyUpdateCoverImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function propertyUpdateCoverImageController(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Cover image is required" });
        }
        const imageObject = await (0, upload_object_image_1.uploadObjectImage)("property-cover-image", (0, generate_random_string_1.generateRandomString)(10), req.file.buffer, req.file.mimetype);
        const { propertyID } = req.body;
        const updatedProperty = await mongodb_1.PROPERTY.findByIdAndUpdate(propertyID, { coverImage: imageObject }, { new: true });
        if (!updatedProperty) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_NOT_FOUND });
        }
        return res.status(200).json({
            message: "Cover image updated successfully",
            payload: updatedProperty,
        });
    }
    catch (err) {
        console.error("❌ ERROR in propertyUpdateCoverImageController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.update.coverImage.controller.js.map