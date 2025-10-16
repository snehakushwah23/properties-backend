import mongoose from "mongoose";

export const newsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String
        },
        status: {
            type: Boolean,
            default: true,
            required: true
        },
        city: {
            type: [String], 
            required: true
        },
        builderID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "builder"
        },
        propertyID: {
            type: [mongoose.Schema.Types.ObjectId], 
            ref: "property"
        },
        views: {
            type: Number,
            default: 0
        },
        isForAllCity: {
            type: Boolean,
            required: true
        },
        customerTypeID: {
            type: [mongoose.Schema.Types.ObjectId], 
            ref: "customerType",
            required: true
        },
        onlyForFavorite: {
            type: Boolean,
            required: true
        },
        newsShortID: {
            type: String, 
            required: true
        },
        visitButton: {
            type: String,
            required: true
        },
        visitButtonActive: {
            type: String,
            required: true
        },
        thumbnail: {
            type: Object, 
            required: true
        }
    },
    { timestamps: true }
);


