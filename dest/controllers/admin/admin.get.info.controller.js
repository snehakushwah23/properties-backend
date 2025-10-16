"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminGetInfoController = adminGetInfoController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function adminGetInfoController(req, res) {
    try {
        const { accessToken } = req;
        const admin = await mongodb_1.ADMIN.findById(accessToken.ID).select("-password");
        if (!admin) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ADMIN_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.ADMIN_FETCHED,
            payload: admin
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=admin.get.info.controller.js.map