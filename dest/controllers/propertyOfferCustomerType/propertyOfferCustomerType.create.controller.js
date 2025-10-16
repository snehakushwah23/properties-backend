"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferCustomerTypeCreateController = propertyOfferCustomerTypeCreateController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyOfferCustomerTypeCreateController(req, res) {
    try {
        const { title, description, offer, endDate, propertyID, customerTypeID } = req.body;
        const newOffer = await mongodb_1.PROPERTY_OFFER_CUSTOMER_TYPE.create({
            title,
            description,
            offer,
            endDate,
            propertyID,
            customerTypeID
        });
        return res.status(201).json({
            message: "PROPERTY OFFER CUSTOMER TYPE CREATED",
            payload: newOffer
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyOfferCustomerType.create.controller.js.map