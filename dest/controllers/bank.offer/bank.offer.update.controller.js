"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankOfferUpdateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function bankOfferUpdateController(req, res) {
    try {
        const { name, shortName, contact, offer, description, endDate, bankOfferID } = req.body;
        const bankOffer = await mongodb_1.BANK_OFFER.findById(bankOfferID);
        if (!bankOffer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_OFFER_NOT_FOUND });
        }
        const updatedBuilder = await mongodb_1.BANK_OFFER.findByIdAndUpdate(bankOfferID, { name, shortName, contact, offer, description, endDate }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_OFFER_UPDATED, payload: updatedBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.bankOfferUpdateController = bankOfferUpdateController;
//# sourceMappingURL=bank.offer.update.controller.js.map