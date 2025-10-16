"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyBuyOptionRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const property_buy_option_create_controller_1 = require("../controllers/property.buy.option/property.buy.option.create.controller");
const property_buy_option_delete_controller_1 = require("../controllers/property.buy.option/property.buy.option.delete.controller");
const property_buy_option_get_controller_1 = require("../controllers/property.buy.option/property.buy.option.get.controller");
const property_buy_option_update_controller_1 = require("../controllers/property.buy.option/property.buy.option.update.controller");
const getPropertyBuyOptionList_controller_1 = require("../controllers/property.buy.option/getPropertyBuyOptionList.controller");
exports.propertyBuyOptionRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.propertyBuyOptionRouter.post('/create', token_middleware_1.getAccessTokenInfo, property_buy_option_create_controller_1.propertyBuyOptionCreateController);
exports.propertyBuyOptionRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, property_buy_option_delete_controller_1.propertyBuyOptionDeleteController);
exports.propertyBuyOptionRouter.get('/get', property_buy_option_get_controller_1.propertyBuyOptionGetController);
exports.propertyBuyOptionRouter.patch('/update', token_middleware_1.getAccessTokenInfo, property_buy_option_update_controller_1.propertyBuyOptionUpdateController);
exports.propertyBuyOptionRouter.get('/get/list', getPropertyBuyOptionList_controller_1.getPropertyBuyOptionListController);
//# sourceMappingURL=property.buy.option.routes.js.map