"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminGetListController = adminGetListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function adminGetListController(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const admins = await mongodb_1.ADMIN.find().skip(skip).limit(limit);
        const total = await mongodb_1.ADMIN.countDocuments();
        return res.status(200).json({
            message: response_messages_1.responseMessages.ADMIN_LIST,
            payload: { admins, total, page, limit }
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=admin.get.list.controller.js.map