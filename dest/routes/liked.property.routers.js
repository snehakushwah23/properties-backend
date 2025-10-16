"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likedPropertyRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const linked_property_create_controller_1 = require("../controllers/liked.property/linked.property.create.controller");
const linked_property_delete_controller_1 = require("../controllers/liked.property/linked.property.delete.controller");
const linked_property_get_controller_1 = require("../controllers/liked.property/linked.property.get.controller");
exports.likedPropertyRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.likedPropertyRouter.post('/create', token_middleware_1.getAccessTokenInfo, linked_property_create_controller_1.likedPropertyCreateController);
exports.likedPropertyRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, linked_property_delete_controller_1.likedPropertyDeleteController);
exports.likedPropertyRouter.delete('/get', linked_property_get_controller_1.getLikedPropertyListController);
//# sourceMappingURL=liked.property.routers.js.map