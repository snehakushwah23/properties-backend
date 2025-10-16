"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMeasurementRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const get_order_measurement_controller_1 = require("../controllers/order.measurement/get.order.measurement.controller");
const create_order_measurement_controller_1 = require("../controllers/order.measurement/create.order.measurement.controller");
const update_order_measurement_controller_1 = require("../controllers/order.measurement/update.order.measurement.controller");
const get_order_measurement_list_controller_1 = require("../controllers/order.measurement/get.order.measurement.list.controller");
const delete_order_measurement_controller_1 = require("../controllers/order.measurement/delete.order.measurement.controller");
exports.orderMeasurementRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.orderMeasurementRouter.get('/getOrderMeasurementByID', token_middleware_1.getAccessTokenInfo, get_order_measurement_controller_1.getOrderMeasurementController);
exports.orderMeasurementRouter.get('/getOrderMeasurementList', token_middleware_1.getAccessTokenInfo, get_order_measurement_list_controller_1.getOrderMeasurementListController);
exports.orderMeasurementRouter.post('/create', token_middleware_1.getAccessTokenInfo, create_order_measurement_controller_1.createOrderMeasurementController);
exports.orderMeasurementRouter.patch('/update', token_middleware_1.getAccessTokenInfo, update_order_measurement_controller_1.updateOrderMeasurementController);
exports.orderMeasurementRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, delete_order_measurement_controller_1.deleteOrderMeasurementController);
//# sourceMappingURL=order.measurement.routes.js.map