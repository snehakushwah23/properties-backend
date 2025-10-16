"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFooterAndQrCodeStatusController = updateFooterAndQrCodeStatusController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function updateFooterAndQrCodeStatusController(req, res) {
    try {
        const { footerImageStatus, qrCodeStatus } = req.body;
        if (typeof footerImageStatus !== "boolean" || typeof qrCodeStatus !== "boolean") {
            return res.status(400).json({ message: "Invalid data. Both footerImageStatus and qrCodeStatus must be boolean values." });
        }
        const updatedHomepage = await mongodb_1.HOME_PAGE.findOneAndUpdate({}, { footerImageStatus, qrCodeStatus }, { new: true, upsert: true });
        return res.status(200).json({
            message: "Footer and QR Code Status Updated Successfully",
            payload: updatedHomepage
        });
    }
    catch (err) {
        console.error("❌ ERROR in updateFooterAndQrCodeStatusController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=homepage.update.footerAndQrCodeStatus.controller.js.map