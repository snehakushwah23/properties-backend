"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultMeasurementTemplateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getDefaultMeasurementTemplateController(req, res) {
    try {
        const { accessToken } = req;
        const { defaultMeasurementTemplateID } = req.query;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const defaultMeasurementTemplate = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE.findById(defaultMeasurementTemplateID);
        if (!defaultMeasurementTemplate) {
            return res.status(404).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_FETCHED, payload: defaultMeasurementTemplate });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getDefaultMeasurementTemplateController = getDefaultMeasurementTemplateController;
//# sourceMappingURL=get.default.measurement.template.controller.js.map