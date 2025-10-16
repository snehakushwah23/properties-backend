"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLoginEmailAndPasswordController = void 0;
const app_config_1 = require("../../constants/app.config");
const response_messages_1 = require("../../constants/response.messages");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const md5_1 = __importDefault(require("md5"));
const mongodb_1 = require("../../services/mongodb");
async function adminLoginEmailAndPasswordController(req, res) {
    try {
        const { email, password } = req.body;
        const encryptedPassword = (0, md5_1.default)(password);
        const admin = await mongodb_1.ADMIN.findOne({ email, password: encryptedPassword }, { password: 0 });
        if (!admin) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ADMIN_NOT_FOUND });
        }
        const adminJWT = jsonwebtoken_1.default.sign({ ID: admin._id }, String(process.env.JWT_TOKEN_SECRETE), { expiresIn: app_config_1.appConfig.JWT_EXPIRE });
        return res.cookie('token', adminJWT, { maxAge: app_config_1.appConfig.COOKIES_MAX_AGE, httpOnly: false }).status(200).json({ message: response_messages_1.responseMessages.ADMIN_LOGGED_IN, payload: adminJWT });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.adminLoginEmailAndPasswordController = adminLoginEmailAndPasswordController;
//# sourceMappingURL=admin.login.email.and.password.controller.js.map