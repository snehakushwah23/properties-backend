"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTypeDeleteController = customerTypeDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function customerTypeDeleteController(req, res) {
    try {
        const { customerTypeID } = req.body;
        const customerType = await mongodb_1.CUSTOMER_TYPE.findById(customerTypeID);
        if (!customerType) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_TYPE_NOT_FOUND });
        }
        const deletedCustomerType = await mongodb_1.CUSTOMER_TYPE.findByIdAndDelete(customerTypeID);
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_TYPE_DELETED, payload: deletedCustomerType });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.type.delete.controller.js.map