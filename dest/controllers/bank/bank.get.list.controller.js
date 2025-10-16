"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankGetListController = bankGetListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankGetListController(req, res) {
    try {
        const { page, limit } = req.query;
        const bankList = await mongodb_1.BANK.find().skip(Number(Number(page) - 1) * Number(limit)).limit(Number(limit));
        return res.status(200).json({ message: response_messages_1.responseMessages.BANKS_LIST_FETCHED, payload: bankList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.get.list.controller.js.map