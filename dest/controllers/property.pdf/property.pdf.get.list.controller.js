"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPDFListController = propertyPDFListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyPDFListController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ message: "Property ID is required" });
        }
        const propertyPDF = await mongodb_1.PROPERTY_PDF.find({ propertyID });
        if (!propertyPDF.length) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PDF_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_PDF_FETCHED,
            payload: propertyPDF
        });
    }
    catch (err) {
        console.error("ERROR in propertyPhotoListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.pdf.get.list.controller.js.map