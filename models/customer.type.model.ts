import mongoose from "mongoose"

export const customerTypeSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
}) 