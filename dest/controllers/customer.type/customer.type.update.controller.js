"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTypeUpdateController = customerTypeUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function customerTypeUpdateController(req, res) {
    try {
        const { customerTypeID, type, description } = req.body;
        const customerType = await mongodb_1.CUSTOMER_TYPE.findById(customerTypeID);
        if (!customerType) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_TYPE_NOT_FOUND });
        }
        const updatedCustomerType = await mongodb_1.CUSTOMER_TYPE.findByIdAndUpdate(customerTypeID, { type, description }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_TYPE_UPDATED, payload: updatedCustomerType });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.type.update.controller.js.map