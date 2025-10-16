"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneNumberAndLinksController = createPhoneNumberAndLinksController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function createPhoneNumberAndLinksController(req, res) {
    try {
        const { phoneNumber, appStoreLink, googlePlayStoreLink } = req.body;
        const updatedEntry = await mongodb_1.HOME_PAGE.findOneAndUpdate({}, { phoneNumber, appStoreLink, googlePlayStoreLink }, { new: true, upsert: true });
        return res.status(200).json({
            message: "Phone Number & Links Updated Successfully",
            payload: updatedEntry
        });
    }
    catch (err) {
        console.error("❌ ERROR in createPhoneNumberAndLinksController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=homepage.create.phoneNumberAndLinks.controller.js.map