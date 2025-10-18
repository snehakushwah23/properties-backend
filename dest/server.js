"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const node_path_1 = __importDefault(require("node:path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use((0, cors_1.default)({ origin: '*', credentials: true }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(node_path_1.default.join(__dirname, '/build')));
const admin_routes_1 = require("./routes/admin.routes");
const builder_routes_1 = require("./routes/builder.routes");
const bank_routes_1 = require("./routes/bank.routes");
const property_link_routes_1 = require("./routes/property.link.routes");
const property_other_image_routes_1 = require("./routes/property.other.image.routes");
const property_buy_option_routes_1 = require("./routes/property.buy.option.routes");
const customer_type_routes_1 = require("./routes/customer.type.routes");
const property_video_routes_1 = require("./routes/property.video.routes");
const property_routes_1 = require("./routes/property.routes");
const property_photo_routes_1 = require("./routes/property.photo.routes");
const property_pdf_routes_1 = require("./routes/property.pdf.routes");
const property_offer_routes_1 = require("./routes/property.offer.routes");
const liked_property_routers_1 = require("./routes/liked.property.routers");
const news_routes_1 = require("./routes/news.routes");
const bank_property_offer_routes_1 = require("./routes/bank.property.offer.routes");
const subadmin_routes_1 = require("./routes/subadmin.routes");
const dashboard_routes_1 = require("./routes/dashboard.routes");
const appHomePageFeaturedImage_routes_1 = require("./routes/appHomePageFeaturedImage.routes");
const websiteHomePageFeaturedImage_routes_1 = require("./routes/websiteHomePageFeaturedImage.routes");
const homepage_routes_1 = require("./routes/homepage.routes");
const propertyLocation_routes_1 = require("./routes/propertyLocation.routes");
const cityFeaturedImage_routes_1 = require("./routes/cityFeaturedImage.routes");
const associateImage_routes_1 = require("./routes/associateImage.routes");
const customer_admin_routes_1 = require("./routes/customer.admin.routes");
const propertyOfferCustomerType_routes_1 = require("./routes/propertyOfferCustomerType.routes");
const property_offer_image_routes_1 = require("./routes/property.offer.image.routes");
const special_link_routes_1 = require("./routes/special.link.routes");
const property_offer_description_routes_1 = require("./routes/property.offer.description.routes");
app.use('/api/admin', admin_routes_1.adminRouter);
app.use('/api/builder', builder_routes_1.builderRouter);
app.use('/api/bank', bank_routes_1.bankRouter);
app.use('/api/bankProperty', bank_property_offer_routes_1.bankPropertyRouter);
app.use('/api/customer', customer_admin_routes_1.customerAdminRouter);
app.use('/api/customerType', customer_type_routes_1.customerTypeRouter);
app.use('/api/dashboard', dashboard_routes_1.dashboardRouter);
app.use('/api/likedProperty', liked_property_routers_1.likedPropertyRouter);
app.use('/api/news', news_routes_1.newsRouter);
app.use('/api/property', property_routes_1.propertyRouter);
app.use('/api/propertyBuyOption', property_buy_option_routes_1.propertyBuyOptionRouter);
app.use('/api/propertyLink', property_link_routes_1.propertyLinkRouter);
app.use('/api/propertyOffer', property_offer_routes_1.propertyOfferRouter);
app.use('/api/propertyOfferCustomerType', propertyOfferCustomerType_routes_1.propertyOfferCustomerTypeRouter);
app.use('/api/propertyOtherImage', property_other_image_routes_1.propertyOtherImageRouter);
app.use('/api/propertyPDF', property_pdf_routes_1.propertyPDFRouter);
app.use('/api/propertyPhoto', property_photo_routes_1.propertyPhotoRouter);
app.use('/api/propertyVideo', property_video_routes_1.propertyVideoRouter);
app.use('/api/subAdmin', subadmin_routes_1.subAdminRouter);
app.use('/api/appHomePageFeaturedImage', appHomePageFeaturedImage_routes_1.appHomePageFeaturedImageRouter);
app.use("/api/websiteHomePageFeaturedImage", websiteHomePageFeaturedImage_routes_1.websiteHomePageFeaturedImageRouter);
app.use("/api/homepage", homepage_routes_1.homepageRouter);
app.use("/api/propertyLocation", propertyLocation_routes_1.propertyLocationRouter);
app.use("/api/cityFeaturedImage", cityFeaturedImage_routes_1.cityFeaturedImageRouter);
app.use("/api/associationImage", associateImage_routes_1.associateImageRouter);
app.use("/api/propertyOfferImage", property_offer_image_routes_1.propertyOfferImageRouter);
app.use("/api/specialLink", special_link_routes_1.specialLinkRouter);
app.use("/api/propertyOfferDescription", property_offer_description_routes_1.propertyOfferDescriptionRouter);
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
    });
});
app.listen(PORT, () => {
    console.log("Server listening at " + PORT);
});
//# sourceMappingURL=server.js.map