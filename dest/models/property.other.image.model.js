"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOtherImageSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyOtherImageSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: true
    },
    propertyID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    },
    order: {
        type: Number,
        required: true,
        default: 0,
    }
}, { timestamps: true });
//# sourceMappingURL=property.other.image.model.js.map