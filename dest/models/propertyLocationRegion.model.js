"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyLocationRegionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyLocationRegionSchema = new mongoose_1.default.Schema({
    city: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    }
}, { timestamps: true });
//# sourceMappingURL=propertyLocationRegion.model.js.map