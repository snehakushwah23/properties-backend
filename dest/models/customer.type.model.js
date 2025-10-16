"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTypeSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.customerTypeSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
//# sourceMappingURL=customer.type.model.js.map