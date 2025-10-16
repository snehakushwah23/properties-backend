"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyBuyOptionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyBuyOptionSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    propertyID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=property.buy.option.model.js.map