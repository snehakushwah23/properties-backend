"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankPropertyRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const bank_property_create_controller_1 = require("../controllers/bank.property/bank.property.create.controller");
const bank_property_delete_controller_1 = require("../controllers/bank.property/bank.property.delete.controller");
const bank_property_get_bankPropertyList_controller_1 = require("../controllers/bank.property/bank.property.get.bankPropertyList.controller");
exports.bankPropertyRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.bankPropertyRouter.post('/create', token_middleware_1.getAccessTokenInfo, bank_property_create_controller_1.bankPropertyCreateController);
exports.bankPropertyRouter.post('/get/bankPropertyList', bank_property_get_bankPropertyList_controller_1.bankPropertyGetListController);
exports.bankPropertyRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, bank_property_delete_controller_1.bankPropertyDeleteController);
//# sourceMappingURL=bank.property.offer.routes.js.map