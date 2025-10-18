import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'node:path'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors({ origin: '*', credentials: true }))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/build')))

import { adminRouter } from './routes/admin.routes'
import { builderRouter } from './routes/builder.routes'
import { bankRouter } from './routes/bank.routes'
import { propertyLinkRouter } from './routes/property.link.routes'
import { propertyOtherImageRouter } from './routes/property.other.image.routes'
import { propertyBuyOptionRouter } from './routes/property.buy.option.routes'
import { customerTypeRouter } from './routes/customer.type.routes'
import { propertyVideoRouter } from './routes/property.video.routes'
import { propertyRouter } from './routes/property.routes'
import { propertyPhotoRouter } from './routes/property.photo.routes'
import { propertyPDFRouter } from './routes/property.pdf.routes'
import { propertyOfferRouter } from './routes/property.offer.routes'
import { likedPropertyRouter } from './routes/liked.property.routers'
import { newsRouter } from './routes/news.routes'
import { bankPropertyRouter } from './routes/bank.property.offer.routes'
import { subAdminRouter } from './routes/subadmin.routes'
import { dashboardRouter } from './routes/dashboard.routes'
import { appHomePageFeaturedImageRouter } from './routes/appHomePageFeaturedImage.routes'
import { websiteHomePageFeaturedImageRouter } from './routes/websiteHomePageFeaturedImage.routes'
import { homepageRouter } from './routes/homepage.routes'
import { propertyLocationRouter } from './routes/propertyLocation.routes'
import { cityFeaturedImageRouter } from './routes/cityFeaturedImage.routes'
import { associateImageRouter } from './routes/associateImage.routes'
import { customerAdminRouter } from './routes/customer.admin.routes'
import { propertyOfferCustomerTypeRouter } from './routes/propertyOfferCustomerType.routes'
import { propertyOfferImageRouter } from './routes/property.offer.image.routes'
import { specialLinkRouter } from './routes/special.link.routes'
import { propertyOfferDescriptionRouter } from './routes/property.offer.description.routes'

app.use('/api/admin', adminRouter)
app.use('/api/builder', builderRouter)
app.use('/api/bank', bankRouter)
app.use('/api/bankProperty', bankPropertyRouter)
app.use('/api/customer', customerAdminRouter)
app.use('/api/customerType', customerTypeRouter)
app.use('/api/dashboard', dashboardRouter)
app.use('/api/likedProperty', likedPropertyRouter)
app.use('/api/news', newsRouter)
app.use('/api/property', propertyRouter)
app.use('/api/propertyBuyOption', propertyBuyOptionRouter)
app.use('/api/propertyLink', propertyLinkRouter)
app.use('/api/propertyOffer', propertyOfferRouter)
app.use('/api/propertyOfferCustomerType', propertyOfferCustomerTypeRouter)
app.use('/api/propertyOtherImage', propertyOtherImageRouter)
app.use('/api/propertyPDF', propertyPDFRouter)
app.use('/api/propertyPhoto', propertyPhotoRouter)
app.use('/api/propertyVideo', propertyVideoRouter)
app.use('/api/subAdmin', subAdminRouter)
app.use('/api/appHomePageFeaturedImage', appHomePageFeaturedImageRouter)
app.use("/api/websiteHomePageFeaturedImage", websiteHomePageFeaturedImageRouter)
app.use("/api/homepage", homepageRouter)
app.use("/api/propertyLocation", propertyLocationRouter)
app.use("/api/cityFeaturedImage", cityFeaturedImageRouter)
app.use("/api/associationImage", associateImageRouter)
app.use("/api/propertyOfferImage", propertyOfferImageRouter)
app.use("/api/specialLink", specialLinkRouter)
app.use("/api/propertyOfferDescription", propertyOfferDescriptionRouter)

// Health check route - moved to end to ensure it's properly compiled
app.get('/', (_req, res) => {
    res.json({
        status: 'success',
        message: 'Properties Backend API is running',
        version: '1.0.0',
        totalEndpoints: 25,
        endpoints: {
            admin: '/api/admin',
            appHomePageFeaturedImage: '/api/appHomePageFeaturedImage',
            associationImage: '/api/associationImage',
            bank: '/api/bank',
            bankProperty: '/api/bankProperty',
            builder: '/api/builder',
            cityFeaturedImage: '/api/cityFeaturedImage',
            customer: '/api/customer',
            customerType: '/api/customerType',
            dashboard: '/api/dashboard',
            homepage: '/api/homepage',
            likedProperty: '/api/likedProperty',
            news: '/api/news',
            property: '/api/property',
            propertyBuyOption: '/api/propertyBuyOption',
            propertyLink: '/api/propertyLink',
            propertyLocation: '/api/propertyLocation',
            propertyOffer: '/api/propertyOffer',
            propertyOfferCustomerType: '/api/propertyOfferCustomerType',
            propertyOfferDescription: '/api/propertyOfferDescription',
            propertyOfferImage: '/api/propertyOfferImage',
            propertyOtherImage: '/api/propertyOtherImage',
            propertyPDF: '/api/propertyPDF',
            propertyPhoto: '/api/propertyPhoto',
            propertyVideo: '/api/propertyVideo',
            specialLink: '/api/specialLink',
            subAdmin: '/api/subAdmin',
            websiteHomePageFeaturedImage: '/api/websiteHomePageFeaturedImage'
        },
        documentation: {
            note: 'All endpoints support standard HTTP methods (GET, POST, PUT, PATCH, DELETE)',
            authentication: 'Some endpoints may require authentication tokens',
            cors: 'CORS is enabled for all origins'
        }
    })
})

app.listen(PORT, () => {
    console.log("Server listening at " + PORT)
})