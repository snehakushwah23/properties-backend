import mongoose from "mongoose"

export const propertyOtherImageSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: true
    },
    propertyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    },
    order: {
        type: Number,
        required: true,
        default: 0, 
    }

}, { timestamps: true }) 
