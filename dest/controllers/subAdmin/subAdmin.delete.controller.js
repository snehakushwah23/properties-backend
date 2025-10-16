"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminDeleteController = subAdminDeleteController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function subAdminDeleteController(req, res) {
    try {
        const { accessToken } = req;
        await mongodb_1.SUB_ADMIN.findByIdAndDelete(accessToken.ID);
        return res.status(200).json({
            message: response_messages_1.responseMessages.ADMIN_DELETED
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=subAdmin.delete.controller.js.map