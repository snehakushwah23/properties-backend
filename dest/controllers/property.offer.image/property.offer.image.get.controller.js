"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferImageGetController = propertyOfferImageGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOfferImageGetController(req, res) {
    try {
        const { propertyOfferImageID } = req.query;
        const propertyOfferImage = await mongodb_1.PROPERTY_OFFER_IMAGE.findById(propertyOfferImageID);
        if (!propertyOfferImage) {
            return res.status(404).json({ message: "PROPERTY_OFFER_IMAGE_NOT_FOUND" });
        }
        return res.status(200).json({ message: "PROPERTY_OFFER_IMAGE_FETCHED", payload: propertyOfferImage });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.image.get.controller.js.map