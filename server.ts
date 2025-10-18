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
            admin: {
                baseUrl: '/api/admin',
                description: 'Admin management operations',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            appHomePageFeaturedImage: {
                baseUrl: '/api/appHomePageFeaturedImage',
                description: 'App homepage featured images management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            associationImage: {
                baseUrl: '/api/associationImage',
                description: 'Association images management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            bank: {
                baseUrl: '/api/bank',
                description: 'Bank management operations',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            bankProperty: {
                baseUrl: '/api/bankProperty',
                description: 'Bank property offers management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            builder: {
                baseUrl: '/api/builder',
                description: 'Builder management operations',
                subRoutes: {
                    get: '/api/builder/get',
                    list: '/api/builder/get/list',
                    count: '/api/builder/get/count',
                    properties: '/api/builder/get/properties',
                    search: '/api/builder/search/name'
                },
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            cityFeaturedImage: {
                baseUrl: '/api/cityFeaturedImage',
                description: 'City featured images management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            customer: {
                baseUrl: '/api/customer',
                description: 'Customer management operations',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            customerType: {
                baseUrl: '/api/customerType',
                description: 'Customer type management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            dashboard: {
                baseUrl: '/api/dashboard',
                description: 'Dashboard data and analytics',
                methods: ['GET']
            },
            homepage: {
                baseUrl: '/api/homepage',
                description: 'Homepage content management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            likedProperty: {
                baseUrl: '/api/likedProperty',
                description: 'User liked properties management',
                methods: ['GET', 'POST', 'DELETE']
            },
            news: {
                baseUrl: '/api/news',
                description: 'News and articles management',
                subRoutes: {
                    get: '/api/news/get',
                    list: '/api/news/get/list',
                    count: '/api/news/get/totalCount'
                },
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            property: {
                baseUrl: '/api/property',
                description: 'Property management operations',
                subRoutes: {
                    get: '/api/property/get',
                    list: '/api/property/get/list',
                    count: '/api/property/get/count',
                    search: {
                        byAddress: '/api/property/search/address',
                        byCity: '/api/property/search/city',
                        byReraID: '/api/property/search/reraID',
                        byName: '/api/property/search/name',
                        byRegion: '/api/property/search/region',
                        byCityAndRegion: '/api/property/search/cityAndRegion'
                    },
                    filter: {
                        basic: '/api/property/get/propertyByFilter',
                        compressed: '/api/property/get/propertyByFilterCompressed',
                        multiple: '/api/property/get/propertyListByMultipleFilter'
                    },
                    location: '/api/property/get/propertyByLatitudeAndLongitude',
                    types: '/api/property/get/propertyTypeList'
                },
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyBuyOption: {
                baseUrl: '/api/propertyBuyOption',
                description: 'Property buy options management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyLink: {
                baseUrl: '/api/propertyLink',
                description: 'Property links management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyLocation: {
                baseUrl: '/api/propertyLocation',
                description: 'Property location management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyOffer: {
                baseUrl: '/api/propertyOffer',
                description: 'Property offers management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyOfferCustomerType: {
                baseUrl: '/api/propertyOfferCustomerType',
                description: 'Property offer customer types',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyOfferDescription: {
                baseUrl: '/api/propertyOfferDescription',
                description: 'Property offer descriptions',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyOfferImage: {
                baseUrl: '/api/propertyOfferImage',
                description: 'Property offer images',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyOtherImage: {
                baseUrl: '/api/propertyOtherImage',
                description: 'Property other images',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyPDF: {
                baseUrl: '/api/propertyPDF',
                description: 'Property PDF documents',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyPhoto: {
                baseUrl: '/api/propertyPhoto',
                description: 'Property photos',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            propertyVideo: {
                baseUrl: '/api/propertyVideo',
                description: 'Property videos',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            specialLink: {
                baseUrl: '/api/specialLink',
                description: 'Special links management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            subAdmin: {
                baseUrl: '/api/subAdmin',
                description: 'Sub-admin management',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            },
            websiteHomePageFeaturedImage: {
                baseUrl: '/api/websiteHomePageFeaturedImage',
                description: 'Website homepage featured images',
                methods: ['GET', 'POST', 'PATCH', 'DELETE']
            }
        },
        documentation: {
            note: 'All endpoints support standard HTTP methods (GET, POST, PUT, PATCH, DELETE)',
            authentication: 'Some endpoints may require authentication tokens',
            cors: 'CORS is enabled for all origins',
            examples: {
                getProperty: 'GET /api/property/get?id=PROPERTY_ID',
                getPropertyList: 'GET /api/property/get/list?page=1&limit=10',
                searchByCity: 'GET /api/property/search/city?city=Mumbai',
                getBuilderList: 'GET /api/builder/get/list?page=1&limit=10',
                getNewsList: 'GET /api/news/get/list?page=1&limit=10'
            }
        }
    })
})

app.listen(PORT, () => {
    console.log("Server listening at " + PORT)
})