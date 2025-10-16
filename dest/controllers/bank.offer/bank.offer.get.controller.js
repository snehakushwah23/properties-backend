"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankOfferGetController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankOfferGetController(req, res) {
    try {
        const { bankOfferID } = req.query;
        const bankOffer = await mongodb_1.BANK_OFFER.findById(bankOfferID);
        if (!bankOffer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_OFFER_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_OFFER_FETCHED, payload: bankOffer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.bankOfferGetController = bankOfferGetController;
//# sourceMappingURL=bank.offer.get.controller.js.map