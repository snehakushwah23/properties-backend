import mongoose from "mongoose"

export const propertyLinkSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    link: {
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
