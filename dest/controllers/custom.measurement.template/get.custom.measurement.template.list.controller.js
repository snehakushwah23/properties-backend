"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomMeasurementTemplateListController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getCustomMeasurementTemplateListController(req, res) {
    try {
        const { accessToken } = req;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const customMeasurementTemplateList = await mongodb_1.CUSTOM_MEASUREMENT_TEMPLATE.find({ userID: user._id });
        if (!customMeasurementTemplateList) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_LIST_EMPTY });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_LIST_FETCHED, payload: customMeasurementTemplateList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getCustomMeasurementTemplateListController = getCustomMeasurementTemplateListController;
//# sourceMappingURL=get.custom.measurement.template.list.controller.js.map