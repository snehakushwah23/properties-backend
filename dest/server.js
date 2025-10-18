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
    });
});
app.listen(PORT, () => {
    console.log("Server listening at " + PORT);
});
//# sourceMappingURL=server.js.map