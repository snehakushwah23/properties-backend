"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPDFGetController = propertyPDFGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyPDFGetController(req, res) {
    try {
        const { propertyPDFID } = req.query;
        const propertyPDF = await mongodb_1.PROPERTY_PDF.findById(propertyPDFID);
        if (!propertyPDF) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PDF_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_PDF_FETCHED, payload: propertyPDF });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.pdf.get.controller.js.map