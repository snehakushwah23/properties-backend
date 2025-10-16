"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPDFCreateController = propertyPDFCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_1 = require("../../helpers/upload.object");
async function propertyPDFCreateController(req, res) {
    try {
        const { propertyID, title } = req.body;
        const propertyPDFObject = await (0, upload_object_1.uploadObject)('property-pdf', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const createdPropertyOtherPDF = await mongodb_1.PROPERTY_PDF.create({ pdf: propertyPDFObject, propertyID, title });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_PDF_CREATED, payload: createdPropertyOtherPDF });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.pdf.create.controller.js.map