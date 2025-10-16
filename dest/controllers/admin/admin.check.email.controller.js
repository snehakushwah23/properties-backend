"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCheckEmailController = adminCheckEmailController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function adminCheckEmailController(req, res) {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ message: "Email query parameter is required" });
        }
        const admin = await mongodb_1.ADMIN.findOne({ email });
        return res.status(200).json({ exists: !!admin });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=admin.check.email.controller.js.map