"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropertyOfferDescriptionController = createPropertyOfferDescriptionController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function createPropertyOfferDescriptionController(req, res) {
    try {
        const { shortDescriptionOffer, shortDescriptionSpecialOffer, propertyID } = req.body;
        const updatedEntry = await mongodb_1.PROPERTY_OFFER_DESCRIPTION.findOneAndUpdate({ propertyID }, { shortDescriptionOffer, shortDescriptionSpecialOffer }, { new: true, upsert: true });
        return res.status(200).json({
            message: "Description Updated Successfully",
            payload: updatedEntry
        });
    }
    catch (err) {
        console.error("❌ ERROR in createPropertyOfferDescriptionController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.description.create.controller.js.map