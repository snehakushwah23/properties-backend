"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultMeasurementTemplateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function createDefaultMeasurementTemplateController(req, res) {
    try {
        const { accessToken } = req;
        const { title, note } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const createDefaultMeasurementTemplate = await mongodb_1.DEFAULT_MEASUREMENT_TEMPLATE.create({ note, title });
        return res.status(200).json({ message: response_messages_1.responseMessages.DEFAULT_MEASUREMENT_TEMPLATE_CREATED, payload: createDefaultMeasurementTemplate });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.createDefaultMeasurementTemplateController = createDefaultMeasurementTemplateController;
//# sourceMappingURL=create.default.measurement.template.controller.js.map