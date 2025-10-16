"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminSearchByNameController = subAdminSearchByNameController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function subAdminSearchByNameController(req, res) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;
        const regex = new RegExp(search, "i");
        const sortOrder = order === "asc" ? 1 : -1;
        const subAdmins = await mongodb_1.SUB_ADMIN.find({ name: regex })
            .sort({ name: sortOrder })
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
//# sourceMappingURL=subAdmin.search.name.controller.js.map