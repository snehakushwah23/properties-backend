import mongoose from "mongoose"

export const propertyBuyOptionSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    propertyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    }

}, { timestamps: true }) 