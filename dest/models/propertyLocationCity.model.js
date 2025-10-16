"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyLocationCitySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyLocationCitySchema = new mongoose_1.default.Schema({
    city: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true });
//# sourceMappingURL=propertyLocationCity.model.js.map