import mongoose from "mongoose"

export const propertyOfferCustomerTypeSchema = new mongoose.Schema({

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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true,
    },
    customerTypeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomerType",
    }

}, { timestamps: true }) 