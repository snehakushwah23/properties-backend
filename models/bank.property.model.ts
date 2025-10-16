import mongoose from "mongoose"

export const bankPropertySchema = new mongoose.Schema({

    propertyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    },

    bankID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bank',
        required: true
    }

}, { timestamps: true }) 