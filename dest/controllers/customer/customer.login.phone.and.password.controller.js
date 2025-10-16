"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerLoginPhoneAndPasswordController = customerLoginPhoneAndPasswordController;
const app_config_1 = require("../../constants/app.config");
const response_messages_1 = require("../../constants/response.messages");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const md5_1 = __importDefault(require("md5"));
const mongodb_1 = require("../../services/mongodb");
async function customerLoginPhoneAndPasswordController(req, res) {
    try {
        const { password, phoneNumber, countryCode } = req.body;
        const encryptedPassword = (0, md5_1.default)(password);
        const customer = await mongodb_1.CUSTOMER.findOne({ phoneNumber, countryCode, password: encryptedPassword }, { password: 0 });
        if (!customer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_DOES_NOT_EXIST });
        }
        const customerJWT = jsonwebtoken_1.default.sign({ ID: customer._id }, String(process.env.JWT_TOKEN_SECRETE), { expiresIn: app_config_1.appConfig.JWT_EXPIRE });
        return res.cookie('token', customerJWT, { maxAge: app_config_1.appConfig.COOKIES_MAX_AGE, httpOnly: false }).status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_LOGGED_IN_SUCCESSFULLY, payload: customerJWT });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.login.phone.and.password.controller.js.map