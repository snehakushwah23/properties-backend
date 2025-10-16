"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomMeasurementTemplateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function createCustomMeasurementTemplateController(req, res) {
    try {
        const { accessToken } = req;
        const { title, note } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const createCustomMeasurementTemplate = await mongodb_1.CUSTOM_MEASUREMENT_TEMPLATE.create({ note, title, userID: user._id });
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOM_MEASUREMENT_TEMPLATE_CREATED, payload: createCustomMeasurementTemplate });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.createCustomMeasurementTemplateController = createCustomMeasurementTemplateController;
//# sourceMappingURL=create.custom.measurement.template.controller.js.map