"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerAdminRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const blockCustomer_controller_1 = require("../controllers/customer.admin/blockCustomer.controller");
const getCustomerById_controller_1 = require("../controllers/customer.admin/getCustomerById.controller");
const searchCustomerByPhone_controller_1 = require("../controllers/customer.admin/searchCustomerByPhone.controller");
const searchCustomerByName_controller_1 = require("../controllers/customer.admin/searchCustomerByName.controller");
const getCustomerList_controller_1 = require("../controllers/customer.admin/getCustomerList.controller");
exports.customerAdminRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.customerAdminRouter.put('/admin/block', token_middleware_1.getAccessTokenInfo, blockCustomer_controller_1.blockCustomer);
exports.customerAdminRouter.get('/admin/get', token_middleware_1.getAccessTokenInfo, getCustomerById_controller_1.getCustomerById);
exports.customerAdminRouter.get('/admin/search/phoneNumber', token_middleware_1.getAccessTokenInfo, searchCustomerByPhone_controller_1.searchCustomerByPhone);
exports.customerAdminRouter.get('/admin/search/name', token_middleware_1.getAccessTokenInfo, searchCustomerByName_controller_1.searchCustomerByName);
exports.customerAdminRouter.get('/admin/get/list', token_middleware_1.getAccessTokenInfo, getCustomerList_controller_1.getCustomerList);
//# sourceMappingURL=customer.admin.routes.js.map