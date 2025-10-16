"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCreateController = adminCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const md5_1 = __importDefault(require("md5"));
async function adminCreateController(req, res) {
    try {
        const { accessToken } = req;
        const { name, gender, email, phoneNumber, password, countryCode } = req.body;
        const admin = await mongodb_1.ADMIN.findOne({ $or: [{ email }, { phoneNumber }] });
        if (admin) {
            return res.status(409).json({ message: response_messages_1.responseMessages.ADMIN_EXISTS });
        }
        const updatedAdmin = await mongodb_1.ADMIN.create({ name, gender, countryCode, email, password: (0, md5_1.default)(password), createdBy: accessToken.ID, phoneNumber, });
        return res.status(200).json({ message: response_messages_1.responseMessages.ADMIN_CREATED, payload: updatedAdmin });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=admin.create.controller.js.map