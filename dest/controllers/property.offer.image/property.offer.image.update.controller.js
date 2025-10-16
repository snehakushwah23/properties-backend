"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferImageUpdateController = propertyOfferImageUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOfferImageUpdateController(req, res) {
    try {
        const { title, propertyOfferImageID } = req.body;
        const propertyOfferImage = await mongodb_1.PROPERTY_OFFER_IMAGE.findById(propertyOfferImageID);
        if (!propertyOfferImage) {
            return res.status(404).json({ message: "PROPERTY_OFFER_IMAGE_NOT_FOUND" });
        }
        const updatedPropertyOfferImage = await mongodb_1.PROPERTY_OFFER_IMAGE.findByIdAndUpdate(propertyOfferImageID, { title }, { new: true });
        return res.status(200).json({ message: "PROPERTY_OFFER_IMAGE_UPDATED", payload: updatedPropertyOfferImage });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.image.update.controller.js.map