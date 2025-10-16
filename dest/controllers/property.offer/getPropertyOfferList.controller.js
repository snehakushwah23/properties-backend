"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyOfferListController = getPropertyOfferListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getPropertyOfferListController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const propertyOffers = await mongodb_1.PROPERTY_OFFER.find({ propertyID });
        if (!propertyOffers.length) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_OFFER_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_OFFER_LIST_FETCHED,
            payload: propertyOffers
        });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=getPropertyOfferList.controller.js.map