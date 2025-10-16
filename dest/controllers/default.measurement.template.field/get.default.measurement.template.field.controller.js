"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultMeasurementTemplateFieldController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getDefaultMeasurementTemplateFieldController(req, res) {
    try {
        const { accessToken } = req;
        const { defaultMeasurementTemplateFieldID } = req.query;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const defaultMeasurementTemplateField = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE_FIELD.findById(defaultMeasurementTemplateFieldID);
        if (!defaultMeasurementTemplateField) {
            return res.status(404).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_FIELD_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_FIELD_FETCHED, payload: defaultMeasurementTemplateField });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getDefaultMeasurementTemplateFieldController = getDefaultMeasurementTemplateFieldController;
//# sourceMappingURL=get.default.measurement.template.field.controller.js.map