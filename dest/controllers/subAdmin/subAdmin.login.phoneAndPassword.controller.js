"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminLoginPhoneAndPasswordController = subAdminLoginPhoneAndPasswordController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const md5_1 = __importDefault(require("md5"));
const app_config_1 = require("../../constants/app.config");
async function subAdminLoginPhoneAndPasswordController(req, res) {
    try {
        const { phoneNumber, countryCode, password } = req.body;
        const encryptedPassword = (0, md5_1.default)(password);
        const subAdmin = await mongodb_1.SUB_ADMIN.findOne({ phoneNumber, countryCode, password: encryptedPassword }, { password: 0 });
        if (!subAdmin) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ADMIN_NOT_FOUND });
        }
        const subAdminJWT = jsonwebtoken_1.default.sign({ ID: subAdmin._id }, String(process.env.JWT_TOKEN_SECRETE), { expiresIn: app_config_1.appConfig.JWT_EXPIRE });
        return res.cookie("token", subAdminJWT, {
            maxAge: app_config_1.appConfig.COOKIES_MAX_AGE,
            httpOnly: false
        }).status(200).json({
            message: response_messages_1.responseMessages.ADMIN_LOGGED_IN,
            payload: subAdminJWT
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=subAdmin.login.phoneAndPassword.controller.js.map