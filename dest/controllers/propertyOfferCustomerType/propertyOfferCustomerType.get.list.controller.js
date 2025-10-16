"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferCustomerTypeGetListController = propertyOfferCustomerTypeGetListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function propertyOfferCustomerTypeGetListController(req, res) {
    try {
        const { propertyID } = req.query;
        const offers = await mongodb_1.PROPERTY_OFFER_CUSTOMER_TYPE.find({ propertyID });
        return res.status(200).json({
            message: "PROPERTY_OFFER_CUSTOMER_TYPE_LIST_FETCHED",
            payload: offers
        });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=propertyOfferCustomerType.get.list.controller.js.map