"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const country_code_and_currency_1 = require("../../constants/country.code.and.currency");
async function createOrderController(req, res) {
    try {
        const { accessToken } = req;
        const { amount, customerID, deliveryDate, paymentStatus, note, quantity, title, urgent } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const customerDetails = await mongodb_1.CUSTOMER.findById(customerID);
        if (!customerDetails) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_NOT_FOUND });
        }
        if (!customerDetails.userID.equals(user._id)) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_DOES_NOT_BELONGS_TO_USER });
        }
        const createdOrder = await mongodb_1.ORDER.create({ amount, currency: country_code_and_currency_1.countryCodeCurrencyMapping[user.countryCode] || 'USD', customerID, deliveryDate, paymentStatus, note, quantity, title, userID: accessToken.ID, urgent });
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_CREATED, payload: createdOrder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.createOrderController = createOrderController;
//# sourceMappingURL=create.order.controller.js.map