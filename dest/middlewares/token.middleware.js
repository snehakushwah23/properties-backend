"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessTokenInfo = getAccessTokenInfo;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const response_messages_1 = require("../constants/response.messages");
function getAccessTokenInfo(req, res, next) {
    try {
        const authToken = req.headers['authorization']?.split(' ')[1] || req.cookies.token;
        jsonwebtoken_1.default.verify(String(authToken), String(process.env.JWT_TOKEN_SECRETE), (err, token) => {
            if (err) {
                return res.status(401).json({ message: response_messages_1.responseMessages.INVALID_JWT_TOKEN });
            }
            else {
                req.accessToken = token;
                next();
            }
        });
    }
    catch (err) {
        res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
        console.log("ERROR: " + __filename);
        console.log(err);
    }
}
//# sourceMappingURL=token.middleware.js.map