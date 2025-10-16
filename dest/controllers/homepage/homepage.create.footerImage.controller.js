"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFooterImageController = createFooterImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function createFooterImageController(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const imageObject = await (0, upload_object_image_1.uploadObjectImage)("homepage-footer-image", (0, generate_random_string_1.generateRandomString)(10), req.file.buffer, req.file.mimetype);
        const updatedHomepage = await mongodb_1.HOME_PAGE.findOneAndUpdate({}, { footerImage: imageObject }, { new: true, upsert: true });
        return res.status(201).json({
            message: "Footer Image Created Successfully",
            payload: updatedHomepage,
        });
    }
    catch (err) {
        console.error("❌ ERROR in createFooterImageController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=homepage.create.footerImage.controller.js.map