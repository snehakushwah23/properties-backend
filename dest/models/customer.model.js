"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.customerSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: Object,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    customerType: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'customerType',
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    },
}, { timestamps: true });
//# sourceMappingURL=customer.model.js.map