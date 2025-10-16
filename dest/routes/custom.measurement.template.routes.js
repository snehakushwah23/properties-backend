"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customMeasurementTemplateRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const get_custom_measurement_template_controller_1 = require("../controllers/custom.measurement.template/get.custom.measurement.template.controller");
const get_custom_measurement_template_list_controller_1 = require("../controllers/custom.measurement.template/get.custom.measurement.template.list.controller");
const update_custom_measurement_template_controller_1 = require("../controllers/custom.measurement.template/update.custom.measurement.template.controller");
const create_custom_measurement_template_controller_1 = require("../controllers/custom.measurement.template/create.custom.measurement.template.controller");
exports.customMeasurementTemplateRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.customMeasurementTemplateRouter.get('/getCustomMeasurementTemplateByID', token_middleware_1.getAccessTokenInfo, get_custom_measurement_template_controller_1.getCustomMeasurementTemplateController);
exports.customMeasurementTemplateRouter.get('/getCustomMeasurementTemplateList', token_middleware_1.getAccessTokenInfo, get_custom_measurement_template_list_controller_1.getCustomMeasurementTemplateListController);
exports.customMeasurementTemplateRouter.post('/create', token_middleware_1.getAccessTokenInfo, create_custom_measurement_template_controller_1.createCustomMeasurementTemplateController);
exports.customMeasurementTemplateRouter.patch('/update', token_middleware_1.getAccessTokenInfo, update_custom_measurement_template_controller_1.updateCustomMeasurementTemplateController);
//# sourceMappingURL=custom.measurement.template.routes.js.map