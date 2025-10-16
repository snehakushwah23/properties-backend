"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customMeasurementTemplateFieldRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const get_custom_measurement_template_field_controller_1 = require("../controllers/custom.measurement.template.field/get.custom.measurement.template.field.controller");
const get_custom_measurement_template_field_list_controller_1 = require("../controllers/custom.measurement.template.field/get.custom.measurement.template.field.list.controller");
const create_custom_measurement_template_field_controller_1 = require("../controllers/custom.measurement.template.field/create.custom.measurement.template.field.controller");
const update_custom_measurement_template_field_controller_1 = require("../controllers/custom.measurement.template.field/update.custom.measurement.template.field.controller");
exports.customMeasurementTemplateFieldRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.customMeasurementTemplateFieldRouter.get('/getCustomMeasurementTemplateFieldByID', token_middleware_1.getAccessTokenInfo, get_custom_measurement_template_field_controller_1.getCustomMeasurementTemplateFieldController);
exports.customMeasurementTemplateFieldRouter.get('/getCustomMeasurementTemplateFieldList', token_middleware_1.getAccessTokenInfo, get_custom_measurement_template_field_list_controller_1.getCustomMeasurementTemplateFieldListController);
exports.customMeasurementTemplateFieldRouter.post('/create', token_middleware_1.getAccessTokenInfo, create_custom_measurement_template_field_controller_1.createCustomMeasurementTemplateFieldController);
exports.customMeasurementTemplateFieldRouter.patch('/update', token_middleware_1.getAccessTokenInfo, update_custom_measurement_template_field_controller_1.updateCustomMeasurementTemplateFieldController);
//# sourceMappingURL=custom.measurement.template.field.routes.js.map