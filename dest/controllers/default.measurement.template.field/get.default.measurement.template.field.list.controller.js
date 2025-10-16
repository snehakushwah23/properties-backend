"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultMeasurementTemplateFieldListController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getDefaultMeasurementTemplateFieldListController(req, res) {
    try {
        const { accessToken } = req;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const { defaultMeasurementTemplateID } = req.query;
        const defaultMeasurementTemplateFieldList = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE_FIELD.find({ defaultMeasurementTemplateID });
        if (!defaultMeasurementTemplateFieldList) {
            return res.status(404).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_FIELD_LIST_EMPTY });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_FIELD_LIST_FETCHED, payload: defaultMeasurementTemplateFieldList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getDefaultMeasurementTemplateFieldListController = getDefaultMeasurementTemplateFieldListController;
//# sourceMappingURL=get.default.measurement.template.field.list.controller.js.map