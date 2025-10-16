import mongoose from "mongoose";

export const homepagesSchema = new mongoose.Schema({

    appStoreLink: { 
        type: String, 
        required: false 
    },

    googlePlayStoreLink: { 
        type: String, 
        required: false 
    },

    phoneNumber: { 
        type: String, 
        required: false 
    },

    qrCode: { 
        type: Object, 
        required: false 
    }, 

    websiteLogo: { 
        type: Object, 
        required: false 
    }, 

    footerImage: { 
        type: Object, 
        required: false 
    }, 

    footerImageStatus: { 
        type: Boolean, 
        required: true, 
        default: false 
    },

    qrCodeStatus: { 
        type: Boolean, 
        required: true, 
        default: true 
    }
  },
  { timestamps: true } 
);

