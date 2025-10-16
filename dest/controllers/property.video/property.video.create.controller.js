"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyVideoCreateController = propertyVideoCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_1 = require("../../helpers/upload.object");
async function propertyVideoCreateController(req, res) {
    try {
        const { propertyID, title } = req.body;
        const lastPhoto = await mongodb_1.PROPERTY_VIDEO.findOne({ propertyID }).sort({ order: -1 });
        const newOrder = lastPhoto ? lastPhoto.order + 1 : 1;
        const propertyVideoObject = await (0, upload_object_1.uploadObject)('property-video', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdPropertyOtherVideo = await mongodb_1.PROPERTY_VIDEO.create({ video: propertyVideoObject, propertyID, title });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_VIDEO_CREATED, payload: createdPropertyOtherVideo, order: newOrder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.video.create.controller.js.map