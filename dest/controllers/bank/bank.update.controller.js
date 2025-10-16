"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankUpdateController = bankUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankUpdateController(req, res) {
    try {
        const { name, managerContactNumber, officeAddress, contact, description, shortDescription, offer, shortName, bankID, status } = req.body;
        const bank = await mongodb_1.BANK.findById(bankID);
        if (!bank) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_NOT_FOUND });
        }
        const updatedBank = await mongodb_1.BANK.findByIdAndUpdate(bankID, { name, managerContactNumber, officeAddress, contact, description, shortDescription, offer, shortName, status }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_UPDATED, payload: updatedBank });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.update.controller.js.map