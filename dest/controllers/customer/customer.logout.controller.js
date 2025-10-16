"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerLogoutController = customerLogoutController;
const response_messages_1 = require("../../constants/response.messages");
async function customerLogoutController(_req, res) {
    try {
        return res.clearCookie('token').status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_LOGGED_OUT_SUCCESSFULLY });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.logout.controller.js.map