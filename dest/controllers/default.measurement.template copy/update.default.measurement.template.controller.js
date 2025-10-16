"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefaultMeasurementTemplateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function updateDefaultMeasurementTemplateController(req, res) {
    try {
        const { accessToken } = req;
        const { title, note, defaultMeasurementTemplateID } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const defaultMeasurementTemplate = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE.findById(defaultMeasurementTemplateID);
        if (!defaultMeasurementTemplate) {
            return res.status(404).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_NOT_FOUND });
        }
        const updateDefaultMeasurementTemplate = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE.findByIdAndUpdate(defaultMeasurementTemplateID, { note, title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_UPDATED, payload: updateDefaultMeasurementTemplate });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.updateDefaultMeasurementTemplateController = updateDefaultMeasurementTemplateController;
//# sourceMappingURL=update.default.measurement.template.controller.js.map