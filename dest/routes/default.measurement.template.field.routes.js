"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMeasurementTemplateFieldRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const get_default_measurement_template_field_controller_1 = require("../controllers/default.measurement.template.field/get.default.measurement.template.field.controller");
const get_default_measurement_template_field_list_controller_1 = require("../controllers/default.measurement.template.field/get.default.measurement.template.field.list.controller");
const create_default_measurement_template_field_controller_1 = require("../controllers/default.measurement.template.field/create.default.measurement.template.field.controller");
const update_default_measurement_template_field_controller_1 = require("../controllers/default.measurement.template.field/update.default.measurement.template.field.controller");
exports.defaultMeasurementTemplateFieldRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.defaultMeasurementTemplateFieldRouter.get('/getDefaultMeasurementTemplateFieldByID', token_middleware_1.getAccessTokenInfo, get_default_measurement_template_field_controller_1.getDefaultMeasurementTemplateFieldController);
exports.defaultMeasurementTemplateFieldRouter.get('/getDefaultMeasurementTemplateFieldList', token_middleware_1.getAccessTokenInfo, get_default_measurement_template_field_list_controller_1.getDefaultMeasurementTemplateFieldListController);
exports.defaultMeasurementTemplateFieldRouter.post('/create', token_middleware_1.getAccessTokenInfo, create_default_measurement_template_field_controller_1.createDefaultMeasurementTemplateFieldController);
exports.defaultMeasurementTemplateFieldRouter.patch('/update', token_middleware_1.getAccessTokenInfo, update_default_measurement_template_field_controller_1.updateDefaultMeasurementTemplateFieldController);
//# sourceMappingURL=default.measurement.template.field.routes.js.map