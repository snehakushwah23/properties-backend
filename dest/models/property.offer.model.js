"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyOfferSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    offer: {
        type: String,
        required: true
    },
    propertyID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=property.offer.model.js.map