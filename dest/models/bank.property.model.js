"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankPropertySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.bankPropertySchema = new mongoose_1.default.Schema({
    propertyID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    },
    bankID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'bank',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=bank.property.model.js.map