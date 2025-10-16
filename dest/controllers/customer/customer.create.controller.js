"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerCreateController = customerCreateController;
const app_config_1 = require("../../constants/app.config");
const response_messages_1 = require("../../constants/response.messages");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const md5_1 = __importDefault(require("md5"));
const phone_1 = __importDefault(require("phone"));
const mongodb_1 = require("../../services/mongodb");
const firebase_1 = require("../../services/firebase");
async function customerCreateController(req, res) {
    try {
        const { password, firebaseToken, gender, name, customerType } = req.body;
        const firebaseUserData = await firebase_1.firebaseAdmin.auth().getUser(firebaseToken);
        const { countryCode, phoneNumber } = (0, phone_1.default)(firebaseUserData.phoneNumber);
        const isCustomerExist = await mongodb_1.CUSTOMER.findOne({ phoneNumber, countryCode }, { password: 0 });
        if (isCustomerExist) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_ALREADY_EXISTS });
        }
        const encryptedPassword = (0, md5_1.default)(password);
        const createdCustomer = await mongodb_1.CUSTOMER.create({ countryCode, gender, name, phoneNumber: phoneNumber?.replace(countryCode, ''), password: encryptedPassword, customerType });
        const customerJWT = jsonwebtoken_1.default.sign({ ID: createdCustomer._id }, String(process.env.JWT_TOKEN_SECRETE), { expiresIn: app_config_1.appConfig.JWT_EXPIRE });
        return res.cookie('token', customerJWT, { maxAge: app_config_1.appConfig.COOKIES_MAX_AGE, httpOnly: false }).status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_CREATED_SUCCESSFULLY, payload: customerJWT });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.create.controller.js.map