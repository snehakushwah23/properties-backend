"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPDFUpdateController = propertyPDFUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyPDFUpdateController(req, res) {
    try {
        const { title, propertyPDFID } = req.body;
        const propertyPDF = await mongodb_1.PROPERTY_PDF.findById(propertyPDFID);
        if (!propertyPDF) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PDF_NOT_FOUND });
        }
        const updatedPropertyPDF = await mongodb_1.PROPERTY_PDF.findByIdAndUpdate(propertyPDFID, { title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_PDF_UPDATED, payload: updatedPropertyPDF });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.pdf.update.controller.js.map