import mongoose from "mongoose";

export const propertySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        shortIntroduction: {
            type: String,
        },
        shortDescription: {
            type: String,
        },
        propertyType: {
            type: [String],
        },
        projectStatus: {
            type: [String],
        },
        status: {
            type: Boolean,
            default: false
        },
        propertyShortID: {
            type: String,
            required: true
        },
        assistantManager: {
            type: String
        },
        bankAPFBankNames: {
            type: [String], 
            default: []
        },
        builderID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "builder",
            required: true
        },
        isHotProperty: {
            type: Boolean,
        },
        listing: {
            type: Boolean,
        },
        propertyOptions: {
            type: [String], 
            default: []
        },
        propertyVariation: {
            type: [String], 
            default: []
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        region: {
            type: String,
        },
        completedTower: {
            type: Number,
            default: 0
        },
        contactRelationshipManagerName: {
            type: String
        },
        contactRelationshipManagerPhoneNumber: {
            type: String
        },
        contactSaleName: {
            type: String
        },
        contactSalePhoneNumber: {
            type: String
        },
        googleMapsSalesOfficeLink: {
            type: String
        },
        googleMapsSiteLink: {
            type: String
        },
        gpsSite: {
            type: String
        },
        isBankAPF: {
            type: Boolean,
            default: false
        },
        launchedTower: {
            type: Number,
            default: 0
        },
        numberOfFloor: {
            type: Number,
            default: 0
        },
        partner: {
            type: String
        },
        plotArea: {
            type: String
        },
        price: {
            type: String
        },
        propertyTier: {
            type: [String],
        },
        reraID: {
            type: String
        },
        reraStatus: {
            type: String,
        },
        salesOfficeAddress: {
            type: String
        },
        salesOfficeGPS: {
            type: String
        },
        shortAddress: {
            type: String
        },
        shortOffer: {
            type: String
        },
        shortVariant: {
            type: String
        },
        showLikes: {
            type: Boolean,
            default: false
        },
        showRelationshipManagerContacts: {
            type: Boolean,
            default: false
        },
        showShortOffer: {
            type: Boolean,
            default: false
        },
        showWhatsappLink: {
            type: Boolean,
            default: false
        },
        sroPromoter: {
            type: [String]
        },
        totalTower: {
            type: Number,
            default: 0
        },
        websiteLink: {
            type: String
        },
        possession: {
            type: String
        },
        coverImage: {
            type: Object, 
        },
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
        whatsappLink: {
            type: String,
        }
    },
    { timestamps: true }
);

