"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customMeasurementTemplateSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.customMeasurementTemplateSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=custom.measurement.template.model.js.map