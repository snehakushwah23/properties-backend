"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminGetInfoController = subAdminGetInfoController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function subAdminGetInfoController(req, res) {
    try {
        const { accessToken } = req;
        const subAdmin = await mongodb_1.SUB_ADMIN.findById(accessToken.ID).select("-password");
        if (!subAdmin) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ADMIN_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.ADMIN_FETCHED,
            payload: subAdmin
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=subAdmin.get.info.controller.js.map