"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function deleteCustomerController(req, res) {
    try {
        const { accessToken } = req;
        const { customerID } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const customer = await mongodb_1.CUSTOMER.findById(customerID);
        if (!customer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_NOT_FOUND });
        }
        if (!customer.userID.equals(user._id)) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_DOES_NOT_BELONGS_TO_USER });
        }
        const deletedCustomer = await mongodb_1.CUSTOMER.findByIdAndDelete(customerID);
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_DELETED, payload: deletedCustomer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.deleteCustomerController = deleteCustomerController;
//# sourceMappingURL=delete.customer.controller.js.map