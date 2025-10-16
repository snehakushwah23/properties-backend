import mongoose from "mongoose"

export const appHomePageFeaturedImageSchema = new mongoose.Schema({
    
    image: {
        type: Object,
        required: true,
    }
    
}, { timestamps: true }) 
