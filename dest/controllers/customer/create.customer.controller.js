"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const phone_1 = __importDefault(require("phone"));
async function createCustomerController(req, res) {
    try {
        const { accessToken } = req;
        const { address, countryCode, gender, phoneNumber, name } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const { isValid } = (0, phone_1.default)(String(countryCode) + String(phoneNumber));
        if (!isValid) {
            return res.status(400).json({ message: response_messages_1.responseMessages.PHONE_NUMBER_INVALID });
        }
        const createdCustomer = await mongodb_1.CUSTOMER.create({ address, countryCode, gender, phoneNumber, name, userID: user._id });
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_UPDATED, payload: createdCustomer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.createCustomerController = createCustomerController;
//# sourceMappingURL=create.customer.controller.js.map