"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfileController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function updateUserProfileController(req, res) {
    try {
        const { name, gender } = req.body;
        const { accessToken } = req;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const updatedUser = await mongodb_1.USER.findByIdAndUpdate(accessToken.ID, { name, gender }, { new: true }).lean();
        delete updatedUser.password;
        return res.status(200).json({ message: response_messages_1.responseMessages.USER_UPDATED, payload: updatedUser });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.updateUserProfileController = updateUserProfileController;
//# sourceMappingURL=update.user.profile.controller.js.map