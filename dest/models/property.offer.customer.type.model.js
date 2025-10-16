"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferCustomerTypeSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.propertyOfferCustomerTypeSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    offer: {
        type: String,
        required: true,
        trim: true,
    },
    endDate: {
        type: Date,
    },
    propertyID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Property",
        required: true,
    },
    customerTypeID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "CustomerType",
    }
}, { timestamps: true });
//# sourceMappingURL=property.offer.customer.type.model.js.map