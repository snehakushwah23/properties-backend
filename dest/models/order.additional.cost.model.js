"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderAdditionalCostSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.orderAdditionalCostSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    orderID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'order',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=order.additional.cost.model.js.map