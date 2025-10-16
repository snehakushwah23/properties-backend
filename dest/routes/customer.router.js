"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const get_customer_controller_1 = require("../controllers/customer/get.customer.controller");
const delete_customer_controller_1 = require("../controllers/customer/delete.customer.controller");
const update_customer_controller_1 = require("../controllers/customer/update.customer.controller");
const create_customer_controller_1 = require("../controllers/customer/create.customer.controller");
const get_user_customer_list_controller_1 = require("../controllers/customer/get.user.customer.list.controller");
exports.customerRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.customerRouter.get('/getCustomerByID', token_middleware_1.getAccessTokenInfo, get_customer_controller_1.getCustomerController);
exports.customerRouter.get('/getCustomerList', token_middleware_1.getAccessTokenInfo, get_user_customer_list_controller_1.getUserCustomerListController);
exports.customerRouter.post('/create', token_middleware_1.getAccessTokenInfo, create_customer_controller_1.createCustomerController);
exports.customerRouter.patch('/update', token_middleware_1.getAccessTokenInfo, update_customer_controller_1.updateCustomerController);
exports.customerRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, delete_customer_controller_1.deleteCustomerController);
//# sourceMappingURL=customer.router.js.map