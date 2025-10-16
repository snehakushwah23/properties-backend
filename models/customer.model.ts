import mongoose from "mongoose"

export const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: Object,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    customerType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customerType',
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    },

}, { timestamps: true })
