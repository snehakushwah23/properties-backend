"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.websiteHomePageFeaturedImageSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.websiteHomePageFeaturedImageSchema = new mongoose_1.default.Schema({
    image: {
        type: Object,
        required: true,
    }
}, { timestamps: true });
//# sourceMappingURL=websiteHomePageFeaturedImage.model.js.map