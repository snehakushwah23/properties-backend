"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankPropertyOfferDeleteController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankPropertyOfferDeleteController(req, res) {
    try {
        const { bankPropertyOfferID } = req.body;
        const isBankPropertyOfferExist = await mongodb_1.BANK_PROPERTY_OFFER.findById(bankPropertyOfferID);
        if (!isBankPropertyOfferExist) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_PROPERTY_OFFER_NOT_FOUND });
        }
        const deletedBankPropertyOffer = await mongodb_1.BANK_PROPERTY_OFFER.findByIdAndDelete(bankPropertyOfferID);
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_PROPERTY_OFFER_DELETED, payload: deletedBankPropertyOffer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.bankPropertyOfferDeleteController = bankPropertyOfferDeleteController;
//# sourceMappingURL=bank.property.offer.delete.controller.js.map