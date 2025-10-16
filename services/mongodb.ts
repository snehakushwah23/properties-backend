import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const connectionString = String(process.env.MONGODB_URL)
mongoose.connect(connectionString).then(() => { console.log("connected to MongoDB") }).catch((err) => { console.log("Unable to connect to MongoDB" + err) })

import { adminSchema } from "../models/admin.model"
import { subAdminSchema } from "../models/subadmin.model"
import { builderSchema } from "../models/builder.model"
import { propertySchema } from "../models/property.model"
import { propertyBuyOptionSchema } from "../models/property.buy.option.model"
import { propertyOfferSchema } from "../models/property.offer.model"
import { propertyPDFSchema } from "../models/property.pdf.model"
import { propertyPhotoSchema } from "../models/property.photo.model"
import { propertyLinkSchema } from "../models/property.link.model"
import { propertyVideoSchema } from "../models/property.video.model"
import { propertyOtherImageSchema } from "../models/property.other.image.model"
import { customerSchema } from "../models/customer.model"
import { newsSchema } from "../models/news.model"
import { likedPropertySchema } from '../models/liked.property.model'
import { bankSchema } from "../models/bank.model"
import { bankPropertySchema } from "../models/bank.property.model"
import { customerTypeSchema } from "../models/customer.type.model"
import { appHomePageFeaturedImageSchema } from "../models/apphomepagefeaturedimage.model"
import { websiteHomePageFeaturedImageSchema } from "../models/websiteHomePageFeaturedImage.model"
import { homepagesSchema } from "../models/homepage.model"
import { propertyLocationCitySchema } from "../models/propertyLocationCity.model"
import { propertyLocationRegionSchema } from "../models/propertyLocationRegion.model"
import { cityFeaturedImagesSchema } from "../models/cityFeaturedImages.model"
import { associateImageSchema } from "../models/associateImage.model"
import { propertyOfferCustomerTypeSchema } from "../models/property.offer.customer.type.model"
import { propertyOfferImageSchema } from "../models/property.offer.image.model"
import { specialLinkSchema } from "../models/special.link.model"
import { propertyOfferDescriptionSchema } from "../models/property.offer.description.model"

export const ADMIN = mongoose.model("admin", adminSchema)
export const SUB_ADMIN = mongoose.model("subadmin", subAdminSchema)
export const BUILDER = mongoose.model("builder", builderSchema)
export const BANK = mongoose.model("bankOffer", bankSchema)
export const PROPERTY = mongoose.model("property", propertySchema)
export const PROPERTY_BUY_OPTION = mongoose.model("propertyBuyOption", propertyBuyOptionSchema)
export const PROPERTY_OFFER = mongoose.model('propertyOffer', propertyOfferSchema)
export const PROPERTY_OFFER_CUSTOMER_TYPE = mongoose.model('propertyOfferCustomerType', propertyOfferCustomerTypeSchema)
export const PROPERTY_PDF = mongoose.model('propertyPDF', propertyPDFSchema)
export const PROPERTY_PHOTO = mongoose.model('propertyPhoto', propertyPhotoSchema)
export const PROPERTY_LINK = mongoose.model('propertyLink', propertyLinkSchema)
export const PROPERTY_VIDEO = mongoose.model('propertyVideo', propertyVideoSchema)
export const PROPERTY_OTHER_IMAGE = mongoose.model('propertyOtherImage', propertyOtherImageSchema)
export const CUSTOMER = mongoose.model('customer', customerSchema)
export const NEWS = mongoose.model('news', newsSchema)
export const LINKED_PROPERTY = mongoose.model('linkedProperty', likedPropertySchema)
export const BANK_PROPERTY = mongoose.model('bankProperty', bankPropertySchema)
export const CUSTOMER_TYPE = mongoose.model('customerType', customerTypeSchema)
export const APP_HOME_PAGE_FEATURED_IMAGE = mongoose.model('appHomePageFeaturedImage', appHomePageFeaturedImageSchema)
export const WEBSITE_HOME_PAGE_FEATURED_IMAGE = mongoose.model('websiteHomePageFeaturedImage', websiteHomePageFeaturedImageSchema)
export const HOME_PAGE = mongoose.model('homepage',homepagesSchema)
export const PROPERTY_LOCATION_CITY = mongoose.model("propertyLocationCities", propertyLocationCitySchema)
export const PROPERTY_LOCATION_REGION = mongoose.model("propertyLocationRegions", propertyLocationRegionSchema)
export const CITY_FEATURED_IMAGE = mongoose.model("cityFeaturedImage", cityFeaturedImagesSchema)
export const ASSOCIATE_IMAGE = mongoose.model("associateImage", associateImageSchema)
export const PROPERTY_OFFER_IMAGE = mongoose.model('propertyOfferImage', propertyOfferImageSchema)
export const SPECIAL_LINK = mongoose.model('specialLink', specialLinkSchema)
export const PROPERTY_OFFER_DESCRIPTION = mongoose.model('propertyOfferDescription', propertyOfferDescriptionSchema)