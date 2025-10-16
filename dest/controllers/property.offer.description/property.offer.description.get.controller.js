"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyOfferDescriptionController = getPropertyOfferDescriptionController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getPropertyOfferDescriptionController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ error: "Property ID is required" });
        }
        const offerDescription = await mongodb_1.PROPERTY_OFFER_DESCRIPTION.findOne({ propertyID });
        return res.status(200).json({
            message: "Descriptions Retrieved Successfully",
            payload: offerDescription || null,
        });
    }
    catch (err) {
        console.error("❌ ERROR in getPropertyOfferDescriptionController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.description.get.controller.js.map