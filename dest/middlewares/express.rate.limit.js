"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressRateLimit = expressRateLimit;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
function expressRateLimit(seconds, request) {
    return (0, express_rate_limit_1.default)({ windowMs: seconds * 1000, max: request, message: "Rate limit exceeded  limit.", headers: true });
}
//# sourceMappingURL=express.rate.limit.js.map