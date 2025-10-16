"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyVideoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyVideoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    video: {
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
//# sourceMappingURL=property.video.model.js.map