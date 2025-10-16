"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankDeleteController = bankDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankDeleteController(req, res) {
    try {
        const { bankID } = req.body;
        const bank = await mongodb_1.BANK.findById(bankID);
        if (!bank) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_NOT_FOUND });
        }
        const deletedBank = await mongodb_1.BANK.findByIdAndDelete(bankID);
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_DELETED, payload: deletedBank });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.delete.controller.js.map