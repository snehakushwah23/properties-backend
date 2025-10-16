import mongoose from "mongoose"

export const likedPropertySchema = new mongoose.Schema({

    propertyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    },

    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        required: true
    }

}, { timestamps: true }) 