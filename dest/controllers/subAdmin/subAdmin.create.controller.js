"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminCreateController = subAdminCreateController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const md5_1 = __importDefault(require("md5"));
async function subAdminCreateController(req, res) {
    try {
        const { accessToken } = req;
        const { name, phoneNumber, countryCode, gender, email, password } = req.body;
        const existingSubAdmin = await mongodb_1.SUB_ADMIN.findOne({ $or: [{ email }, { phoneNumber }] });
        if (existingSubAdmin) {
            return res.status(409).json({ message: response_messages_1.responseMessages.ADMIN_EXISTS });
        }
        const newSubAdmin = await mongodb_1.SUB_ADMIN.create({
            name,
            phoneNumber,
            countryCode,
            gender,
            email,
            password: (0, md5_1.default)(password),
            createdBy: accessToken.ID,
        });
        return res.status(201).json({
            message: response_messages_1.responseMessages.ADMIN_CREATED,
            payload: newSubAdmin
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=subAdmin.create.controller.js.map