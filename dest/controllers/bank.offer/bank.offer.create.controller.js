"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankOfferCreateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_image_1 = require("../../helpers/upload.object.image");
async function bankOfferCreateController(req, res) {
    try {
        const { name, shortName, contact, offer, description, endDate } = req.body;
        const logoObject = await (0, upload_object_image_1.uploadObjectImage)('bank-offer-logo', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdBankOffer = await mongodb_1.BANK_OFFER.create({ contact, description, endDate, logo: logoObject, name, offer, shortName });
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_OFFER_CREATED, payload: createdBankOffer });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.bankOfferCreateController = bankOfferCreateController;
//# sourceMappingURL=bank.offer.create.controller.js.map