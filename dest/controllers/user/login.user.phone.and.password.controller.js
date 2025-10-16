"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginPhoneAndPasswordController = void 0;
const app_config_1 = require("../../constants/app.config");
const response_messages_1 = require("../../constants/response.messages");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongodb_1 = require("../../services/mongodb");
const md5_1 = __importDefault(require("md5"));
async function userLoginPhoneAndPasswordController(req, res) {
    try {
        const { phoneNumber, countryCode, password } = req.body;
        const encryptedPassword = (0, md5_1.default)(password);
        const user = await mongodb_1.USER.findOne({ phoneNumber, password: encryptedPassword, countryCode }, { password: 0 });
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const userJWT = jsonwebtoken_1.default.sign({ ID: user._id }, String(process.env.JWT_TOKEN_SECRETE), { expiresIn: app_config_1.appConfig.JWT_EXPIRE });
        return res.cookie('token', userJWT, { maxAge: app_config_1.appConfig.COOKIES_MAX_AGE, httpOnly: false }).status(200).json({ message: response_messages_1.responseMessages.USER_LOGGED_IN, payload: userJWT });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.userLoginPhoneAndPasswordController = userLoginPhoneAndPasswordController;
//# sourceMappingURL=login.user.phone.and.password.controller.js.map