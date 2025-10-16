"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyLinkSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyLinkSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
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
//# sourceMappingURL=property.link.model.js.map