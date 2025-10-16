"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appHomePageFeaturedImageRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const appHomePageFeaturedImage_create_controller_1 = require("../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.create.controller");
const appHomePageFeaturedImage_delete_controller_1 = require("../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.delete.controller");
const appHomePageFeaturedImage_get_controller_1 = require("../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.get.controller");
const appHomePageFeaturedImage_get_list_controller_1 = require("../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.get.list.controller");
const appHomePageFeaturedImage_get_total_count_controller_1 = require("../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.get.total.count.controller");
const multer_middleware_1 = require("../middlewares/multer.middleware");
exports.appHomePageFeaturedImageRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.appHomePageFeaturedImageRouter.post("/create", token_middleware_1.getAccessTokenInfo, multer_middleware_1.Multer.single('image'), appHomePageFeaturedImage_create_controller_1.createAppHomePageFeaturedImageController);
exports.appHomePageFeaturedImageRouter.delete("/delete", token_middleware_1.getAccessTokenInfo, appHomePageFeaturedImage_delete_controller_1.deleteAppHomePageFeaturedImageController);
exports.appHomePageFeaturedImageRouter.get("/get", appHomePageFeaturedImage_get_controller_1.getAppHomePageFeaturedImageController);
exports.appHomePageFeaturedImageRouter.get("/get/list", appHomePageFeaturedImage_get_list_controller_1.getAppHomePageFeaturedImageListController);
exports.appHomePageFeaturedImageRouter.get("/get/total/count", appHomePageFeaturedImage_get_total_count_controller_1.getAppHomePageFeaturedImageTotalCountController);
//# sourceMappingURL=appHomePageFeaturedImage.routes.js.map