"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefaultMeasurementTemplateFieldController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function updateDefaultMeasurementTemplateFieldController(req, res) {
    try {
        const { accessToken } = req;
        const { title, note, defaultMeasurementTemplateFieldID } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const defaultMeasurementTemplateField = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE_FIELD.findById(defaultMeasurementTemplateFieldID);
        if (!defaultMeasurementTemplateField) {
            return res.status(404).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_FIELD_NOT_FOUND });
        }
        const updateDefaultMeasurementTemplate = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE_FIELD.findByIdAndUpdate(defaultMeasurementTemplateFieldID, { note, title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_FIELD_UPDATED, payload: updateDefaultMeasurementTemplate });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.updateDefaultMeasurementTemplateFieldController = updateDefaultMeasurementTemplateFieldController;
//# sourceMappingURL=update.default.measurement.template.field.controller.js.map