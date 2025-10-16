"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const phone_1 = __importDefault(require("phone"));
const response_messages_1 = require("../../constants/response.messages");
const app_config_1 = require("../../constants/app.config");
const generate_jwt_token_1 = require("../../helpers/generate.jwt.token");
const firebase_1 = require("../../services/firebase");
const mongodb_1 = require("../../services/mongodb");
const md5_1 = __importDefault(require("md5"));
async function createUserController(req, res) {
    try {
        const { name, password, firebaseToken, gender } = req.body;
        const firebaseUserData = await firebase_1.firebaseAdmin.auth().getUser(firebaseToken);
        const { countryCode } = (0, phone_1.default)(firebaseUserData.phoneNumber);
        const user = await mongodb_1.USER.findOne({ phoneNumber: String(firebaseUserData.phoneNumber).replace(String(countryCode), '') });
        if (user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_ALREADY_EXISTS });
        }
        const newUser = await mongodb_1.USER.create({ name, phoneNumber: String(firebaseUserData.phoneNumber).replace(String(countryCode), ''), password: (0, md5_1.default)(password), gender, countryCode });
        delete newUser.password;
        const userJWTToken = (0, generate_jwt_token_1.generateJWTToken)({ ID: newUser._id }, app_config_1.appConfig.JWT_EXPIRE);
        return res.cookie('token', userJWTToken, { maxAge: app_config_1.appConfig.COOKIES_MAX_AGE }).status(200).json({ message: response_messages_1.responseMessages.USER_CREATED, payload: userJWTToken });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.createUserController = createUserController;
//# sourceMappingURL=create.user.controller.js.map