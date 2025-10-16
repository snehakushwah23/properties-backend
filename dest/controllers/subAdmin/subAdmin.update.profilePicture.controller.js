"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminUpdateProfilePictureController = subAdminUpdateProfilePictureController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function subAdminUpdateProfilePictureController(req, res) {
    try {
        const { accessToken } = req;
        const { profilePicture } = req.body;
        if (!profilePicture) {
            return res.status(400).json({ message: "Profile picture URL is required" });
        }
        await mongodb_1.SUB_ADMIN.findByIdAndUpdate(accessToken.ID, { profilePicture });
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROFILE_PICTURE_UPDATED
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=subAdmin.update.profilePicture.controller.js.map