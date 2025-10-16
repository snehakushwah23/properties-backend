"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMeasurementTemplateFieldSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.defaultMeasurementTemplateFieldSchema = new mongoose_1.default.Schema({
    defaultMeasurementTemplateID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'defaultMeasurementTemplate',
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
//# sourceMappingURL=default.measurement.template.field.model.js.map