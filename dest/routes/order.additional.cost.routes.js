"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderAdditionalCostRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const get_order_additional_cost_list_controller_1 = require("../controllers/order.additional.cost/get.order.additional.cost.list.controller");
const create_order_additional_cost_controller_1 = require("../controllers/order.additional.cost/create.order.additional.cost.controller");
const update_order_additional_cost_controller_1 = require("../controllers/order.additional.cost/update.order.additional.cost.controller");
const delete_order_additional_cost_controller_1 = require("../controllers/order.additional.cost/delete.order.additional.cost.controller");
const get_order_additional_cost_controller_1 = require("../controllers/order.additional.cost/get.order.additional.cost.controller");
exports.orderAdditionalCostRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.orderAdditionalCostRouter.get('/getOrderAdditionalCostByID', token_middleware_1.getAccessTokenInfo, get_order_additional_cost_controller_1.getOrderAdditionalCostController);
exports.orderAdditionalCostRouter.get('/getAdditionalCostList', token_middleware_1.getAccessTokenInfo, get_order_additional_cost_list_controller_1.getOrderAdditionalCostListController);
exports.orderAdditionalCostRouter.post('/create', token_middleware_1.getAccessTokenInfo, create_order_additional_cost_controller_1.createOrderAdditionalCostController);
exports.orderAdditionalCostRouter.patch('/update', token_middleware_1.getAccessTokenInfo, update_order_additional_cost_controller_1.updateOrderAdditionalCostController);
exports.orderAdditionalCostRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, delete_order_additional_cost_controller_1.deleteOrderAdditionalCostController);
//# sourceMappingURL=order.additional.cost.routes.js.map