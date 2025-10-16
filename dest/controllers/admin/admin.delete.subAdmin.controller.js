"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDeleteSubAdminController = adminDeleteSubAdminController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function adminDeleteSubAdminController(req, res) {
    try {
        const { subAdminId } = req.body;
        if (!subAdminId) {
            return res.status(400).json({ message: "Sub-admin ID is required" });
        }
        await mongodb_1.ADMIN.findByIdAndDelete(subAdminId);
        return res.status(200).json({ message: response_messages_1.responseMessages.ADMIN_DELETED });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=admin.delete.subAdmin.controller.js.map