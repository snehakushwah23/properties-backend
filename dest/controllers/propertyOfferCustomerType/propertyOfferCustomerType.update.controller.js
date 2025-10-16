"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferCustomerTypeUpdateController = propertyOfferCustomerTypeUpdateController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyOfferCustomerTypeUpdateController(req, res) {
    try {
        const { propertyOfferCustomerTypeID, title, description, offer, endDate } = req.body;
        const updatedOffer = await mongodb_1.PROPERTY_OFFER_CUSTOMER_TYPE.findByIdAndUpdate(propertyOfferCustomerTypeID, { title, description, offer, endDate }, { new: true });
        if (!updatedOffer) {
            return res.status(404).json({ message: "PROPERTY_OFFER_CUSTOMER_TYPE_NOT_FOUND" });
        }
        return res.status(200).json({
            message: "PROPERTY_OFFER_CUSTOMER_TYPE_UPDATED",
            payload: updatedOffer
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyOfferCustomerType.update.controller.js.map