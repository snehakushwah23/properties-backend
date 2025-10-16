"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMeasurementTemplateSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.defaultMeasurementTemplateSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=default.measurement.template.model.js.map