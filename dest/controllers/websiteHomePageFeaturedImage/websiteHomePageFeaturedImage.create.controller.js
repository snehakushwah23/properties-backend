"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWebsiteHomePageFeaturedImageController = createWebsiteHomePageFeaturedImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function createWebsiteHomePageFeaturedImageController(req, res) {
    try {
        const imageObject = await (0, upload_object_image_1.uploadObjectImage)('website-home-page-featured-image', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdImage = await mongodb_1.WEBSITE_HOME_PAGE_FEATURED_IMAGE.create({ image: imageObject });
        return res.status(201).json({
            message: "Website featured image created successfully",
            payload: createdImage
        });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=websiteHomePageFeaturedImage.create.controller.js.map