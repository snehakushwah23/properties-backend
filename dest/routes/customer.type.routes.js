"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTypeRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const customer_type_create_controller_1 = require("../controllers/customer.type/customer.type.create.controller");
const customer_type_delete_controller_1 = require("../controllers/customer.type/customer.type.delete.controller");
const customer_type_get_controller_1 = require("../controllers/customer.type/customer.type.get.controller");
const customer_type_update_controller_1 = require("../controllers/customer.type/customer.type.update.controller");
const customerType_getList_controller_1 = require("../controllers/customer.type/customerType.getList.controller");
const customerType_update_isSpecial_controller_1 = require("../controllers/customer.type/customerType.update.isSpecial.controller");
exports.customerTypeRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.customerTypeRouter.post('/create', token_middleware_1.getAccessTokenInfo, customer_type_create_controller_1.customerTypeCreateController);
exports.customerTypeRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, customer_type_delete_controller_1.customerTypeDeleteController);
exports.customerTypeRouter.get('/get', customer_type_get_controller_1.customerTypeGetController);
exports.customerTypeRouter.get('/get/list', customerType_getList_controller_1.customerTypeGetListController);
exports.customerTypeRouter.patch('/update', token_middleware_1.getAccessTokenInfo, customer_type_update_controller_1.customerTypeUpdateController);
exports.customerTypeRouter.patch("/update/isSpecial", token_middleware_1.getAccessTokenInfo, customerType_update_isSpecial_controller_1.customerTypeUpdateIsSpecialController);
//# sourceMappingURL=customer.type.routes.js.map