import mongoose from "mongoose";

export const propertyLocationCitySchema = new mongoose.Schema(
    {
        city: {
            type: String,
            required: true,
            unique: true,
        }
    },
    { timestamps: true }
);


