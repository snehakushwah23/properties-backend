"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferDeleteController = propertyOfferDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOfferDeleteController(req, res) {
    try {
        const { propertyOfferID } = req.body;
        const propertyOffer = await mongodb_1.PROPERTY_OFFER.findById(propertyOfferID);
        if (!propertyOffer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_OFFER_NOT_FOUND });
        }
        const deletedPropertyOffer = await mongodb_1.PROPERTY_OFFER.findByIdAndDelete(propertyOfferID);
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_OFFER_DELETED, payload: deletedPropertyOffer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.delete.controller.js.map