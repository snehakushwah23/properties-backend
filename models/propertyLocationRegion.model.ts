import mongoose from "mongoose";

export const propertyLocationRegionSchema = new mongoose.Schema(
    {
        city: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);


