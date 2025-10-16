"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadObject = uploadObject;
const dotenv_1 = __importDefault(require("dotenv"));
const s3_1 = require("../services/s3");
dotenv_1.default.config();
async function uploadObject(Bucket, Key, Body, ContentType) {
    const params = {
        Bucket: String(process.env.PROJECT_NAME) + "/" + String(process.env.ENVIRONMENT) + "/" + Bucket,
        Key,
        Body,
        ContentType,
        ACL: 'public-read',
    };
    return s3_1.s3.upload(params).promise();
}
//# sourceMappingURL=upload.object.js.map