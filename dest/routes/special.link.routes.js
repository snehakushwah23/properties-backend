"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialLinkRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const special_link_create_controller_1 = require("../controllers/special.link/special.link.create.controller");
const special_link_delete_controller_1 = require("../controllers/special.link/special.link.delete.controller");
const special_link_get_controller_1 = require("../controllers/special.link/special.link.get.controller");
const special_link_get_list_controller_1 = require("../controllers/special.link/special.link.get.list.controller");
const special_link_update_controller_1 = require("../controllers/special.link/special.link.update.controller");
exports.specialLinkRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.specialLinkRouter.post('/create', token_middleware_1.getAccessTokenInfo, special_link_create_controller_1.specialLinkCreateController);
exports.specialLinkRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, special_link_delete_controller_1.specialLinkDeleteController);
exports.specialLinkRouter.get('/get', special_link_get_controller_1.specialLinkGetController);
exports.specialLinkRouter.get('/get/list', special_link_get_list_controller_1.specialLinkListController);
exports.specialLinkRouter.patch('/update', token_middleware_1.getAccessTokenInfo, special_link_update_controller_1.specialLinkUpdateController);
//# sourceMappingURL=special.link.routes.js.map