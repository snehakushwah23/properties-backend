import mongoose from "mongoose";

export const websiteHomePageFeaturedImageSchema = new mongoose.Schema(
    {
        image: {
          type: Object,
          required: true,
        }
    },
    { timestamps: true }
);

