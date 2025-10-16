"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPDFDeleteController = propertyPDFDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const delete_object_1 = require("../../helpers/delete.object");
async function propertyPDFDeleteController(req, res) {
    try {
        const { propertyPDFID } = req.body;
        const propertyPDF = await mongodb_1.PROPERTY_PDF.findById(propertyPDFID);
        if (!propertyPDF) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_PDF_NOT_FOUND });
        }
        const deletedPropertyPDF = await mongodb_1.PROPERTY_PDF.findByIdAndDelete(propertyPDFID);
        await (0, delete_object_1.deleteObject)(deletedPropertyPDF?.pdf.key);
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_PDF_DELETED, payload: propertyPDF });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.pdf.delete.controller.js.map