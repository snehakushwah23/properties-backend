import mongoose from "mongoose"

export const bankSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    offer: {
        type: String,
        required: true
    },
    logo: {
        type: Object,
    },
    bannerImage: {
        type: Object,
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }

}) 