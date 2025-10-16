"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomMeasurementTemplateFieldController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getCustomMeasurementTemplateFieldController(req, res) {
    try {
        const { accessToken } = req;
        const { customMeasurementTemplateFieldID } = req.query;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const customMeasurementTemplateField = await mongodb_1.CUSTOM_MEASUREMENT_TEMPLATE_FIELD.findById(customMeasurementTemplateFieldID);
        if (!customMeasurementTemplateField) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_FIELD_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_FIELD_FETCHED, payload: customMeasurementTemplateField });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getCustomMeasurementTemplateFieldController = getCustomMeasurementTemplateFieldController;
//# sourceMappingURL=get.custom.measurement.template.field.controller.js.map