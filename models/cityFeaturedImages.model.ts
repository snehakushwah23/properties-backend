import mongoose from "mongoose";

export const cityFeaturedImagesSchema = new mongoose.Schema(
    {
        image: {
            type: Object,
            required: true,
        },
        cityID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'propertyLocationCity', 
            required: true,
        },
        title: {
            type: String,
        }
    },
    { timestamps: true }
);

