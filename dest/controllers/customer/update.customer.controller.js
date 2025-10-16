"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function updateCustomerController(req, res) {
    try {
        const { accessToken } = req;
        const { address, countryCode, gender, phoneNumber, name, customerID } = req.body;
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
        const updatedCustomer = await mongodb_1.CUSTOMER.findByIdAndUpdate(customerID, { address, countryCode, gender, phoneNumber, name }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_UPDATED, payload: updatedCustomer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.updateCustomerController = updateCustomerController;
//# sourceMappingURL=update.customer.controller.js.map