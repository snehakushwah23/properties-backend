"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferImageCreateController = propertyOfferImageCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function propertyOfferImageCreateController(req, res) {
    try {
        const { propertyID, title } = req.body;
        const lastPhoto = await mongodb_1.PROPERTY_OFFER_IMAGE.findOne({ propertyID }).sort({ order: -1 });
        const newOrder = lastPhoto ? lastPhoto.order + 1 : 1;
        const propertyOfferImageObject = await (0, upload_object_image_1.uploadObjectImage)('property-offer-image', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdPropertyOfferImage = await mongodb_1.PROPERTY_OFFER_IMAGE.create({ image: propertyOfferImageObject, propertyID, title, order: newOrder });
        return res.status(200).json({ message: "PROPERTY OFFER IMAGE CREATED", payload: createdPropertyOfferImage });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.image.create.controller.js.map