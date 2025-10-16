"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homepagesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.homepagesSchema = new mongoose_1.default.Schema({
    appStoreLink: {
        type: String,
        required: false
    },
    googlePlayStoreLink: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    qrCode: {
        type: Object,
        required: false
    },
    websiteLogo: {
        type: Object,
        required: false
    },
    footerImage: {
        type: Object,
        required: false
    },
    footerImageStatus: {
        type: Boolean,
        required: true,
        default: false
    },
    qrCodeStatus: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true });
//# sourceMappingURL=homepage.model.js.map