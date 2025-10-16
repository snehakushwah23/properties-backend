"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankCreateController = bankCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankCreateController(req, res) {
    try {
        const { name, managerContactNumber, officeAddress, contact, description, shortDescription, offer, shortName, status } = req.body;
        const createdBank = await mongodb_1.BANK.create({ name, managerContactNumber, officeAddress, contact, description, shortDescription, offer, shortName, status });
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_CREATED, payload: createdBank });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.create.controller.js.map