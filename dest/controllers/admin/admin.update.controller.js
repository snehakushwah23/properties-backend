"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUpdateController = adminUpdateController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function adminUpdateController(req, res) {
    try {
        const { accessToken } = req;
        const updateData = req.body;
        const updatedAdmin = await mongodb_1.ADMIN.findByIdAndUpdate(accessToken.ID, updateData, { new: true });
        return res.status(200).json({
            message: response_messages_1.responseMessages.ADMIN_UPDATED,
            payload: updatedAdmin
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=admin.update.controller.js.map