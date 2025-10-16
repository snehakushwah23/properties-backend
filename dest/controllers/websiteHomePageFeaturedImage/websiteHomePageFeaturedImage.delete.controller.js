"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWebsiteHomePageFeaturedImageController = deleteWebsiteHomePageFeaturedImageController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
const delete_object_1 = require("../../helpers/delete.object");
async function deleteWebsiteHomePageFeaturedImageController(req, res) {
    try {
        const { imageID } = req.body;
        const image = await mongodb_1.WEBSITE_HOME_PAGE_FEATURED_IMAGE.findById(imageID);
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        const deletedImage = await mongodb_1.WEBSITE_HOME_PAGE_FEATURED_IMAGE.findByIdAndDelete(imageID);
        await (0, delete_object_1.deleteObject)(deletedImage?.image.key);
        return res.status(200).json({ message: "Website featured image deleted successfully", payload: image });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=websiteHomePageFeaturedImage.delete.controller.js.map