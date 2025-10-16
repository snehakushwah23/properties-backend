"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityFeaturedImagesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.cityFeaturedImagesSchema = new mongoose_1.default.Schema({
    image: {
        type: Object,
        required: true,
    },
    cityID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'propertyLocationCity',
        required: true,
    },
    title: {
        type: String,
    }
}, { timestamps: true });
//# sourceMappingURL=cityFeaturedImages.model.js.map