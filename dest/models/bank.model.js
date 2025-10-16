"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.bankSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
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
    logo: {
        type: Object,
    },
    bannerImage: {
        type: Object,
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
});
//# sourceMappingURL=bank.model.js.map