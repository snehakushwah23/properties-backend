"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankPropertyGetListController = bankPropertyGetListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function bankPropertyGetListController(req, res) {
    try {
        const { bankID, page = 1, limit = 10 } = req.query;
        if (!bankID) {
            return res.status(400).json({ message: "Bank ID is required" });
        }
        const bankProperties = await mongodb_1.BANK_PROPERTY.find({ bankID })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: response_messages_1.responseMessages.BANK_PROPERTY_LIST_FETCHED,
            payload: bankProperties
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.property.get.bankPropertyList.controller.js.map