"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferCreateController = propertyOfferCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyOfferCreateController(req, res) {
    try {
        const { description, offer, propertyID, title } = req.body;
        const createdPropertyOffer = await mongodb_1.PROPERTY_OFFER.create({ description, offer, propertyID, title });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_OFFER_CREATED, payload: createdPropertyOffer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.create.controller.js.map