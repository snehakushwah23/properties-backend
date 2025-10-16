"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderUpdateLogoController = builderUpdateLogoController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_image_1 = require("../../helpers/upload.object.image");
async function builderUpdateLogoController(req, res) {
    try {
        const { builderID } = req.body;
        const builder = await mongodb_1.BUILDER.findById(builderID);
        if (!builder) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BUILDER_NOT_FOUND });
        }
        const logoObject = await (0, upload_object_image_1.uploadObjectImage)('builder-logo', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const updatedBuilder = await mongodb_1.BUILDER.findByIdAndUpdate(builderID, { logo: logoObject }).lean();
        updatedBuilder.logo = logoObject;
        return res.status(200).json({ message: response_messages_1.responseMessages.BUILDER_LOGO_UPDATED, payload: updatedBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=builder.update.logo.controller.js.map