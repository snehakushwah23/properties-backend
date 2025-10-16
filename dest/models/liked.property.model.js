"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likedPropertySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.likedPropertySchema = new mongoose_1.default.Schema({
    propertyID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    },
    customerID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'customer',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=liked.property.model.js.map