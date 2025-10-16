"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOtherImageCreateController = propertyOtherImageCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function propertyOtherImageCreateController(req, res) {
    try {
        const { propertyID, title } = req.body;
        const lastPhoto = await mongodb_1.PROPERTY_OTHER_IMAGE.findOne({ propertyID }).sort({ order: -1 });
        const newOrder = lastPhoto ? lastPhoto.order + 1 : 1;
        const propertyOtherImageObject = await (0, upload_object_image_1.uploadObjectImage)('property-other-image', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdPropertyOtherImage = await mongodb_1.PROPERTY_OTHER_IMAGE.create({ image: propertyOtherImageObject, propertyID, title, order: newOrder });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_CREATED, payload: createdPropertyOtherImage });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.other.image.create.controller.js.map