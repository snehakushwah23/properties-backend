"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPDFSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyPDFSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    pdf: {
        type: Object,
        required: true
    },
    propertyID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=property.pdf.model.js.map