"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMeasurementTemplateRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const get_default_measurement_template_controller_1 = require("../controllers/default.measurement.template/get.default.measurement.template.controller");
const create_default_measurement_template_controller_1 = require("../controllers/default.measurement.template/create.default.measurement.template.controller");
const update_default_measurement_template_controller_1 = require("../controllers/default.measurement.template/update.default.measurement.template.controller");
const get_default_measurement_template_list_controller_1 = require("../controllers/default.measurement.template/get.default.measurement.template.list.controller");
exports.defaultMeasurementTemplateRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.defaultMeasurementTemplateRouter.get('/getDefaultMeasurementTemplateByID', token_middleware_1.getAccessTokenInfo, get_default_measurement_template_controller_1.getDefaultMeasurementTemplateController);
exports.defaultMeasurementTemplateRouter.get('/getDefaultMeasurementTemplateList', token_middleware_1.getAccessTokenInfo, get_default_measurement_template_list_controller_1.getDefaultMeasurementTemplateListController);
exports.defaultMeasurementTemplateRouter.post('/create', token_middleware_1.getAccessTokenInfo, create_default_measurement_template_controller_1.createDefaultMeasurementTemplateController);
exports.defaultMeasurementTemplateRouter.patch('/update', token_middleware_1.getAccessTokenInfo, update_default_measurement_template_controller_1.updateDefaultMeasurementTemplateController);
//# sourceMappingURL=default.measurement.template.routes.js.map