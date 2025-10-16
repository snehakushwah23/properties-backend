"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTypeGetListController = customerTypeGetListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function customerTypeGetListController(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const customerTypes = await mongodb_1.CUSTOMER_TYPE.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).json({
            message: response_messages_1.responseMessages.CUSTOMER_TYPE_LIST_FETCHED,
            payload: customerTypes
        });
    }
    catch (err) {
        console.error("ERROR in customerTypeGetListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customerType.getList.controller.js.map