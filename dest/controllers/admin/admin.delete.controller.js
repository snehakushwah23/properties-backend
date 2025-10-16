"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDeleteController = adminDeleteController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function adminDeleteController(req, res) {
    try {
        const { accessToken } = req;
        await mongodb_1.ADMIN.findByIdAndDelete(accessToken.ID);
        return res.status(200).json({ message: response_messages_1.responseMessages.ADMIN_DELETED });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=admin.delete.controller.js.map