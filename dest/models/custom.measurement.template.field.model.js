"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customMeasurementTemplateFieldSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.customMeasurementTemplateFieldSchema = new mongoose_1.default.Schema({
    customMeasurementTemplateID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'customMeasurementTemplate',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=custom.measurement.template.field.model.js.map