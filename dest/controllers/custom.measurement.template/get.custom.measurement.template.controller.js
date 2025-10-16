"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomMeasurementTemplateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getCustomMeasurementTemplateController(req, res) {
    try {
        const { accessToken } = req;
        const { customMeasurementTemplateID } = req.query;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const customMeasurementTemplate = await mongodb_1.CUSTOM_MEASUREMENT_TEMPLATE.findById(customMeasurementTemplateID);
        if (!customMeasurementTemplate) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_FETCHED, payload: customMeasurementTemplate });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getCustomMeasurementTemplateController = getCustomMeasurementTemplateController;
//# sourceMappingURL=get.custom.measurement.template.controller.js.map