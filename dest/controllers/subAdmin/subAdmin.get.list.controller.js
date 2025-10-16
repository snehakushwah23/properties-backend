"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminGetListController = subAdminGetListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function subAdminGetListController(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const subAdmins = await mongodb_1.SUB_ADMIN.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: response_messages_1.responseMessages.ADMIN_FETCHED,
            payload: subAdmins
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=subAdmin.get.list.controller.js.map