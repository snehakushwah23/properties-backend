"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.orderSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    customerID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'customer',
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    urgent: {
        type: Boolean,
        default: false,
        required: true
    },
    deliveryStatus: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'completed', 'cancelled']
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ['pending', 'completed', 'cancelled']
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: true,
        required: true
    },
    currency: {
        type: String,
        required: true,
        enum: ['USD', 'INR', 'EUR', 'GBP', 'CAD', 'JPY', 'AUD', 'CNY', 'CHF', 'SEK', 'NZD', 'MXN', 'SGD', 'HKD', 'NOK', 'KRW', 'TRY', 'RUB', 'BRL', 'ZAR', 'DKK', 'PLN', 'THB', 'MYR', 'IDR', 'HUF', 'CZK', 'ILS', 'CLP', 'PHP', 'AED', 'COP', 'SAR', 'TWD', 'ARS', 'VND', 'BGN', 'HRK', 'RON']
    },
    amount: {
        type: Number,
        required: true
    },
    note: {
        type: String,
    }
}, { timestamps: true });
//# sourceMappingURL=order.model.js.map