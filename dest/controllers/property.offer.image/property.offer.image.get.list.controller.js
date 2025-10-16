"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferImageListController = propertyOfferImageListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOfferImageListController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }
        const propertyImages = await mongodb_1.PROPERTY_OFFER_IMAGE.find({ propertyID }).sort({ order: 1 });
        ;
        if (!propertyImages.length) {
            return res.status(404).json({ message: "PROPERTY_OFFER_IMAGE_NOT_FOUND" });
        }
        return res.status(200).json({
            message: "PROPERTY_OFFER_IMAGE_FETCHED",
            payload: propertyImages
        });
    }
    catch (err) {
        console.error("ERROR in propertyOfferImageListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.image.get.list.controller.js.map