"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankPropertyDeleteController = bankPropertyDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankPropertyDeleteController(req, res) {
    try {
        const { bankPropertyID } = req.body;
        const isBankPropertyExist = await mongodb_1.BANK_PROPERTY.findById(bankPropertyID);
        if (!isBankPropertyExist) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_PROPERTY_NOT_FOUND });
        }
        const deletedBankProperty = await mongodb_1.BANK_PROPERTY.findByIdAndDelete(bankPropertyID);
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_PROPERTY_DELETED, payload: deletedBankProperty });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.property.delete.controller.js.map