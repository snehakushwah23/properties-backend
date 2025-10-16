"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomMeasurementTemplateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function updateCustomMeasurementTemplateController(req, res) {
    try {
        const { accessToken } = req;
        const { title, note, customMeasurementTemplateID } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const customMeasurementTemplate = await mongodb_1.CUSTOM_MEASUREMENT_TEMPLATE.findById(customMeasurementTemplateID);
        if (!customMeasurementTemplate) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_NOT_FOUND });
        }
        const updateCustomMeasurementTemplate = await mongodb_1.CUSTOM_MEASUREMENT_TEMPLATE.findByIdAndUpdate(customMeasurementTemplateID, { note, title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_UPDATED, payload: updateCustomMeasurementTemplate });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.updateCustomMeasurementTemplateController = updateCustomMeasurementTemplateController;
//# sourceMappingURL=update.custom.measurement.template.controller.js.map