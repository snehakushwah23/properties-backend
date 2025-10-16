"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyLinkRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const property_link_create_controller_1 = require("../controllers/property.link/property.link.create.controller");
const property_link_delete_controller_1 = require("../controllers/property.link/property.link.delete.controller");
const property_link_get_controller_1 = require("../controllers/property.link/property.link.get.controller");
const property_link_update_controller_1 = require("../controllers/property.link/property.link.update.controller");
const property_link_get_list_controller_1 = require("../controllers/property.link/property.link.get.list.controller");
exports.propertyLinkRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.propertyLinkRouter.post('/create', token_middleware_1.getAccessTokenInfo, property_link_create_controller_1.propertyLinkCreateController);
exports.propertyLinkRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, property_link_delete_controller_1.propertyLinkDeleteController);
exports.propertyLinkRouter.get('/get', property_link_get_controller_1.propertyLinkGetController);
exports.propertyLinkRouter.get('/get/list', property_link_get_list_controller_1.propertyLinkListController);
exports.propertyLinkRouter.patch('/update', token_middleware_1.getAccessTokenInfo, property_link_update_controller_1.propertyLinkUpdateController);
//# sourceMappingURL=property.link.routes.js.map