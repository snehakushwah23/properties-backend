"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadObjectImage = uploadObjectImage;
const dotenv_1 = __importDefault(require("dotenv"));
const s3_1 = require("../services/s3");
dotenv_1.default.config();
const sharp_1 = __importDefault(require("sharp"));
async function uploadObjectImage(Bucket, Key, Body, ContentType, quality = 20) {
    const compressedBuffer = await (0, sharp_1.default)(Body).webp({ quality: quality }).toBuffer();
    const params = {
        Bucket: String(process.env.PROJECT_NAME) + "/" + String(process.env.ENVIRONMENT) + "/" + Bucket,
        Key,
        Body: compressedBuffer,
        ContentType,
        ACL: 'public-read',
    };
    return s3_1.s3.upload(params).promise();
}
//# sourceMappingURL=upload.object.image.js.map