"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankPropertyOfferCreateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankPropertyOfferCreateController(req, res) {
    try {
        const { bankID, propertyID } = req.body;
        const isBankPropertyOfferExist = await mongodb_1.BANK_PROPERTY_OFFER.findOne({ bankID, propertyID });
        if (isBankPropertyOfferExist) {
            return res.status(409).json({ message: response_messages_1.responseMessages.BANK_PROPERTY_OFFER_ALREADY_EXISTS });
        }
        const createdBankPropertyOffer = await mongodb_1.BANK_PROPERTY_OFFER.create({ bankID, propertyID });
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_PROPERTY_OFFER_CREATED, payload: createdBankPropertyOffer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.bankPropertyOfferCreateController = bankPropertyOfferCreateController;
//# sourceMappingURL=bank.property.offer.create.controller.js.map