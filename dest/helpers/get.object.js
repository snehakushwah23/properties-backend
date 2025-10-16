"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObject = getObject;
const dotenv_1 = __importDefault(require("dotenv"));
const s3_1 = require("../services/s3");
dotenv_1.default.config();
async function getObject(Key) {
    const params = {
        Bucket: String(process.env.PROJECT_NAME),
        Key
    };
    return s3_1.s3.getObject(params).promise();
}
//# sourceMappingURL=get.object.js.map