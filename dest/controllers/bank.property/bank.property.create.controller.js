"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankPropertyCreateController = bankPropertyCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankPropertyCreateController(req, res) {
    try {
        const { bankID, propertyID } = req.body;
        const bank = await mongodb_1.BANK.findById(bankID);
        if (!bank) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_NOT_FOUND });
        }
        const property = await mongodb_1.PROPERTY.findById(propertyID);
        if (!property) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_NOT_FOUND });
        }
        const isBankPropertyExist = await mongodb_1.BANK_PROPERTY.findOne({ bankID, propertyID });
        if (isBankPropertyExist) {
            return res.status(409).json({ message: response_messages_1.responseMessages.BANK_PROPERTY_ALREADY_EXISTS });
        }
        const createdBankProperty = await mongodb_1.BANK_PROPERTY.create({ bankID, propertyID });
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_PROPERTY_CREATED, payload: createdBankProperty });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.property.create.controller.js.map