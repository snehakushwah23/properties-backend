import mongoose from "mongoose";

export const associateImageSchema = new mongoose.Schema(
    {
        image: {
          type: Object,
          required: true,
        }
    },
    { timestamps: true }
);

