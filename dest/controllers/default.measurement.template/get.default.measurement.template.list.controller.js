"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultMeasurementTemplateListController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getDefaultMeasurementTemplateListController(req, res) {
    try {
        const { accessToken } = req;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const defaultMeasurementTemplateList = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE.find({});
        if (!defaultMeasurementTemplateList) {
            return res.status(404).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_LIST_EMPTY });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_LIST_FETCHED, payload: defaultMeasurementTemplateList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getDefaultMeasurementTemplateListController = getDefaultMeasurementTemplateListController;
//# sourceMappingURL=get.default.measurement.template.list.controller.js.map