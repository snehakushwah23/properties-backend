"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankOfferUpdateLogoController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const delete_object_1 = require("../../helpers/delete.object");
async function bankOfferUpdateLogoController(req, res) {
    try {
        const { bankOfferID } = req.body;
        const bankOffer = await mongodb_1.BANK_OFFER.findById(bankOfferID);
        if (!bankOffer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_OFFER_NOT_FOUND });
        }
        const logoObject = await (0, upload_object_image_1.uploadObjectImage)('bank-offer-logo', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const updatedBuilder = await mongodb_1.BANK_OFFER.findByIdAndUpdate(bankOfferID, { logo: logoObject }).lean();
        await (0, delete_object_1.deleteObject)(bankOffer?.logo.key);
        updatedBuilder.logo = logoObject;
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_OFFER_LOGO_UPDATED, payload: updatedBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.bankOfferUpdateLogoController = bankOfferUpdateLogoController;
//# sourceMappingURL=bank.offer.update.logo.controller.js.map