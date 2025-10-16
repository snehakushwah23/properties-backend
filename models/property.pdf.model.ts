import mongoose from "mongoose"

export const propertyPDFSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    pdf: {
        type: Object,
        required: true
    },
    propertyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    }

}, { timestamps: true }) 
