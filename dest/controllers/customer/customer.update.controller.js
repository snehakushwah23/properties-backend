"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerUpdateController = customerUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function customerUpdateController(req, res) {
    try {
        const { accessToken } = req;
        const { gender, name } = req.body;
        const customer = await mongodb_1.CUSTOMER.findById(accessToken.ID);
        if (!customer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_DOES_NOT_EXIST });
        }
        const createdCustomer = await mongodb_1.CUSTOMER.findByIdAndUpdate(accessToken.ID, { name, gender }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_UPDATED, payload: createdCustomer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.update.controller.js.map