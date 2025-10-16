"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMeasurementSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.orderMeasurementSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    measurement: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true,
        enum: ['cm', 'in', 'mm', 'ft', 'm', 'yd']
    },
    note: {
        type: String,
        required: true
    },
    orderID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'order',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=order.measurements.model.js.map