"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomMeasurementTemplateFieldListController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getCustomMeasurementTemplateFieldListController(req, res) {
    try {
        const { accessToken } = req;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const { customMeasurementTemplateID } = req.query;
        const customMeasurementTemplateFieldList = await mongodb_1.CUSTOM_MEASUREMENT_TEMPLATE_FIELD.find({ customMeasurementTemplateID });
        if (!customMeasurementTemplateFieldList) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_FIELD_LIST_EMPTY });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_FIELD_LIST_FETCHED, payload: customMeasurementTemplateFieldList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getCustomMeasurementTemplateFieldListController = getCustomMeasurementTemplateFieldListController;
//# sourceMappingURL=get.custom.measurement.template.field.list.controller.js.map