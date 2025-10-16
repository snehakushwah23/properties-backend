"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderCreateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_image_1 = require("../../helpers/upload.object.image");
async function builderCreateController(req, res) {
    try {
        const { name, managerContactNumber, officeAddress, officeContactNumber, website, salesManagerContactNumber } = req.body;
        const logoObject = await (0, upload_object_image_1.uploadObjectImage)('builder-logo', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdBuilder = await mongodb_1.BUILDER.create({ name, logo: logoObject, managerContactNumber, officeAddress, officeContactNumber, salesManagerContactNumber, website, });
        return res.status(200).json({ message: response_messages_1.responseMessages.BUILDER_CREATED, payload: createdBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.builderCreateController = builderCreateController;
//# sourceMappingURL=property.buy.create.controller.js.map