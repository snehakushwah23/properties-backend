"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPhotoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyPhotoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    photo: {
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
//# sourceMappingURL=property.photo.model.js.map