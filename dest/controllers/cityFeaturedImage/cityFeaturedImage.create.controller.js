"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCityFeaturedImageController = createCityFeaturedImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function createCityFeaturedImageController(req, res) {
    try {
        const imageObject = await (0, upload_object_image_1.uploadObjectImage)('city-featured-image', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdImage = await mongodb_1.CITY_FEATURED_IMAGE.create({ image: imageObject, cityID: req.body.cityID });
        return res.status(201).json({
            message: response_messages_1.responseMessages.PROPERTY_PHOTO_CREATED,
            payload: createdImage,
        });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=cityFeaturedImage.create.controller.js.map