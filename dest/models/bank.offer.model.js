"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankOfferSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.bankOfferSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    offer: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: Object,
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=bank.offer.model.js.map