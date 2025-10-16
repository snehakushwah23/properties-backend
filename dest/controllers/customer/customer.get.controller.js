"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerGetController = customerGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function customerGetController(req, res) {
    try {
        const { accessToken } = req;
        const customer = await mongodb_1.CUSTOMER.findById(accessToken.ID).lean();
        if (!customer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_DOES_NOT_EXIST });
        }
        delete customer?.password;
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_FETCHED, payload: customer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.get.controller.js.map