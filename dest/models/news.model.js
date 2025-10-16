"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.newsSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    },
    city: {
        type: [String],
        required: true
    },
    builderID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "builder"
    },
    propertyID: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "property"
    },
    views: {
        type: Number,
        default: 0
    },
    isForAllCity: {
        type: Boolean,
        required: true
    },
    customerTypeID: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "customerType",
        required: true
    },
    onlyForFavorite: {
        type: Boolean,
        required: true
    },
    newsShortID: {
        type: String,
        required: true
    },
    visitButton: {
        type: String,
        required: true
    },
    visitButtonActive: {
        type: String,
        required: true
    },
    thumbnail: {
        type: Object,
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=news.model.js.map