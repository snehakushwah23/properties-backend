"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankUpdateActiveStatusController = bankUpdateActiveStatusController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function bankUpdateActiveStatusController(req, res) {
    try {
        const { bankID, status } = req.body;
        if (!bankID || status === undefined) {
            return res.status(400).json({ message: "Bank ID and status are required" });
        }
        const updatedBank = await mongodb_1.BANK.findByIdAndUpdate(bankID, { status }, { new: true });
        if (!updatedBank) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.BANK_UPDATED,
            payload: updatedBank
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.update.activeStatus.controller.js.map