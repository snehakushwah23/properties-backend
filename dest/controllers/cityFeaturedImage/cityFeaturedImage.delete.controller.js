"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCityFeaturedImageController = deleteCityFeaturedImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const delete_object_1 = require("../../helpers/delete.object");
async function deleteCityFeaturedImageController(req, res) {
    try {
        const { imageID } = req.body;
        const image = await mongodb_1.CITY_FEATURED_IMAGE.findById(imageID);
        if (!image) {
            return res.status(404).json({ message: response_messages_1.responseMessages.IMAGE_NOT_FOUND });
        }
        const deletedImage = await mongodb_1.CITY_FEATURED_IMAGE.findByIdAndDelete(imageID);
        await (0, delete_object_1.deleteObject)(deletedImage?.image.key);
        return res.status(200).json({ message: response_messages_1.responseMessages.IMAGE_DELETED, payload: image });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=cityFeaturedImage.delete.controller.js.map