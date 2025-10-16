"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWTToken = generateJWTToken;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
function generateJWTToken(data, expiresIn) {
    return jsonwebtoken_1.default.sign(data, String(process.env.JWT_TOKEN_SECRETE), { expiresIn });
}
//# sourceMappingURL=generate.jwt.token.js.map