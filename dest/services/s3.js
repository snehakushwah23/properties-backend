"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: String(process.env.DIGITAL_OCEAN_ACCESS_KEY_ID),
    secretAccessKey: String(process.env.DIGITAL_OCEAN_SECRET_ACCESS_KEY),
    region: String(process.env.DIGITAL_OCEAN_REGION),
});
exports.s3 = new aws_sdk_1.default.S3({
    endpoint: String(process.env.DIGITAL_OCEAN_ENDPOINT),
    s3ForcePathStyle: true,
});
//# sourceMappingURL=s3.js.map