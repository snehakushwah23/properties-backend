"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankOfferDeleteController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const delete_object_1 = require("../../helpers/delete.object");
async function bankOfferDeleteController(req, res) {
    try {
        const { bankOfferID } = req.body;
        const bankOffer = await mongodb_1.BANK_OFFER.findById(bankOfferID);
        if (!bankOffer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_OFFER_NOT_FOUND });
        }
        const deletedBuilder = await mongodb_1.BANK_OFFER.findByIdAndDelete(bankOfferID);
        await (0, delete_object_1.deleteObject)(deletedBuilder?.logo.key);
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_OFFER_DELETED, payload: deletedBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.bankOfferDeleteController = bankOfferDeleteController;
//# sourceMappingURL=bank.offer.delete.controller.js.map