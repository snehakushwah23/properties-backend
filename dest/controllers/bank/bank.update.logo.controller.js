"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankUpdateLogoController = bankUpdateLogoController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_image_1 = require("../../helpers/upload.object.image");
async function bankUpdateLogoController(req, res) {
    try {
        const { bankID } = req.body;
        const bank = await mongodb_1.BANK.findById(bankID);
        if (!bank) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BANK_NOT_FOUND });
        }
        const logoObject = await (0, upload_object_image_1.uploadObjectImage)('bank-logo', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const updatedBank = await mongodb_1.BANK.findByIdAndUpdate(bankID, { logo: logoObject }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.BANK_LOGO_UPDATED, payload: updatedBank });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=bank.update.logo.controller.js.map