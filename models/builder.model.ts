import mongoose from "mongoose"

export const builderSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    officeAddress: {
        type: String,                              
    },
    officeContactNumber: {
        type: String,
    },
    managerContactNumber: {
        type: String,
    },
    salesManagerContactNumber: {
        type: String,
    },
    memberOfSRO: {
        type: [String], 
        default: [],
    },
    yearOfExperience: {
        type: String,
    },
    completedProject: {
        type: String,
    },
    activeProjects: {
        type: String,
    },
    builderShortID: {
        type: String,
        required: true,
        unique: true,
    },
    logo: {
        type: Object,
    },
    coverImage: {
        type: Object,
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }

    }, { timestamps: true }) 