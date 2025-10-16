"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferCustomerTypeRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const propertyOfferCustomerType_create_controller_1 = require("../controllers/propertyOfferCustomerType/propertyOfferCustomerType.create.controller");
const propertyOfferCustomerType_delete_controller_1 = require("../controllers/propertyOfferCustomerType/propertyOfferCustomerType.delete.controller");
const propertyOfferCustomerType_get_list_controller_1 = require("../controllers/propertyOfferCustomerType/propertyOfferCustomerType.get.list.controller");
const propertyOfferCustomerType_get_controller_1 = require("../controllers/propertyOfferCustomerType/propertyOfferCustomerType.get.controller");
const propertyOfferCustomerType_update_controller_1 = require("../controllers/propertyOfferCustomerType/propertyOfferCustomerType.update.controller");
exports.propertyOfferCustomerTypeRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.propertyOfferCustomerTypeRouter.post('/create', token_middleware_1.getAccessTokenInfo, propertyOfferCustomerType_create_controller_1.propertyOfferCustomerTypeCreateController);
exports.propertyOfferCustomerTypeRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, propertyOfferCustomerType_delete_controller_1.propertyOfferCustomerTypeDeleteController);
exports.propertyOfferCustomerTypeRouter.get('/get/list', propertyOfferCustomerType_get_list_controller_1.propertyOfferCustomerTypeGetListController);
exports.propertyOfferCustomerTypeRouter.get('/get', propertyOfferCustomerType_get_controller_1.propertyOfferCustomerTypeGetController);
exports.propertyOfferCustomerTypeRouter.patch('/update', token_middleware_1.getAccessTokenInfo, propertyOfferCustomerType_update_controller_1.propertyOfferCustomerTypeUpdateController);
//# sourceMappingURL=propertyOfferCustomerType.routes.js.map