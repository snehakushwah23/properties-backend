"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const get_order_controller_1 = require("../controllers/order/get.order.controller");
const create_order_controller_1 = require("../controllers/order/create.order.controller");
const update_order_controller_1 = require("../controllers/order/update.order.controller");
const delete_order_controller_1 = require("../controllers/order/delete.order.controller");
const get_user_order_list_controller_1 = require("../controllers/order/get.user.order.list.controller");
exports.orderRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.orderRouter.get('/getOrderByID', token_middleware_1.getAccessTokenInfo, get_order_controller_1.getOrderController);
exports.orderRouter.get('/getOrderList', token_middleware_1.getAccessTokenInfo, get_user_order_list_controller_1.getUserOrderListController);
exports.orderRouter.post('/create', token_middleware_1.getAccessTokenInfo, create_order_controller_1.createOrderController);
exports.orderRouter.patch('/update', token_middleware_1.getAccessTokenInfo, update_order_controller_1.updateOrderController);
exports.orderRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, delete_order_controller_1.deleteOrderController);
//# sourceMappingURL=order.routes.js.map