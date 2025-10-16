"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.builderSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    officeAddress: {
        type: String,
    },
    officeContactNumber: {
        type: String,
    },
    managerContactNumber: {
        type: String,
    },
    salesManagerContactNumber: {
        type: String,
    },
    memberOfSRO: {
        type: [String],
        default: [],
    },
    yearOfExperience: {
        type: String,
    },
    completedProject: {
        type: String,
    },
    activeProjects: {
        type: String,
    },
    builderShortID: {
        type: String,
        required: true,
        unique: true,
    },
    logo: {
        type: Object,
    },
    coverImage: {
        type: Object,
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=builder.model.js.map