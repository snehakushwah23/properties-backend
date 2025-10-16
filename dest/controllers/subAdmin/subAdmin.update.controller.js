"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminUpdateController = subAdminUpdateController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function subAdminUpdateController(req, res) {
    try {
        const { accessToken } = req;
        const updateData = req.body;
        const updatedSubAdmin = await mongodb_1.SUB_ADMIN.findByIdAndUpdate(accessToken.ID, updateData, { new: true });
        return res.status(200).json({
            message: response_messages_1.responseMessages.ADMIN_UPDATED,
            payload: updatedSubAdmin
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=subAdmin.update.controller.js.map