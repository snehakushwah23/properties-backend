"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferUpdateController = propertyOfferUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOfferUpdateController(req, res) {
    try {
        const { description, offer, title, propertyOfferID } = req.body;
        const propertyOffer = await mongodb_1.PROPERTY_OFFER.findById(propertyOfferID);
        if (!propertyOffer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_OFFER_NOT_FOUND });
        }
        const updatedPropertyOffer = await mongodb_1.PROPERTY_OFFER.findByIdAndUpdate(propertyOfferID, { description, offer, title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_OFFER_UPDATED, payload: updatedPropertyOffer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.update.controller.js.map