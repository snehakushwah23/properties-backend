"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferCustomerTypeDeleteController = propertyOfferCustomerTypeDeleteController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyOfferCustomerTypeDeleteController(req, res) {
    try {
        const { propertyOfferCustomerTypeID } = req.body;
        const deletedOffer = await mongodb_1.PROPERTY_OFFER_CUSTOMER_TYPE.findByIdAndDelete(propertyOfferCustomerTypeID);
        if (!deletedOffer) {
            return res.status(404).json({ message: "PROPERTY_OFFER_CUSTOMER_TYPE_NOT_FOUND" });
        }
        return res.status(200).json({ message: "PROPERTY_OFFER_CUSTOMER_TYPE_DELETED" });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyOfferCustomerType.delete.controller.js.map