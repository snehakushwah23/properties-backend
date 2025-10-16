import mongoose from "mongoose"

export const propertyOfferDescriptionSchema = new mongoose.Schema({

    shortDescriptionOffer: {
        type: String,
    },
    shortDescriptionSpecialOffer: {
        type: String,
    },
    propertyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        required: true
    }

}, { timestamps: true }) 
