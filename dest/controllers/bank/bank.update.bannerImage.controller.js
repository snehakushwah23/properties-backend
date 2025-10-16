"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankUpdateBannerImageController = bankUpdateBannerImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_image_1 = require("../../helpers/upload.object.image");
async function bankUpdateBannerImageController(req, res) {
    try {
        const { bankID } = req.body;
        const bank = await mongodb_1.BANK.findById(bankID);
        if (!bank) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_NOT_FOUND });
        }
        if (!req.file) {
            return res.status(400).json({ message: "Banner image is required" });
        }
        const bannerImageObject = await (0, upload_object_image_1.uploadObjectImage)("bank-banner-image", (0, generate_random_string_1.generateRandomString)(10), req.file.buffer, req.file.mimetype);
        const updatedBank = await mongodb_1.BANK.findByIdAndUpdate(bankID, { bannerImage: bannerImageObject }, { new: true });
        return res.status(200).json({
            message: response_messages_1.responseMessages.BANK_UPDATED,
            payload: updatedBank,
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.update.bannerImage.controller.js.map