"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminLogoutController = subAdminLogoutController;
const response_messages_1 = require("../../constants/response.messages");
async function subAdminLogoutController(_req, res) {
    try {
        return res.clearCookie("token").status(200).json({
            message: response_messages_1.responseMessages.ADMIN_LOGGED_OUT
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=subAdmin.logout.controller.js.map