"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getCustomerController(req, res) {
    try {
        const { accessToken } = req;
        const { customerID } = req.query;
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
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_FETCHED, payload: customer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getCustomerController = getCustomerController;
//# sourceMappingURL=get.customer.controller.js.map