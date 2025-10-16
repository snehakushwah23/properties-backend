"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websiteHomePageFeaturedImageRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const websiteHomePageFeaturedImage_create_controller_1 = require("../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.create.controller");
const websiteHomePageFeaturedImage_delete_controller_1 = require("../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.delete.controller");
const websiteHomePageFeaturedImage_get_controller_1 = require("../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.get.controller");
const websiteHomePageFeaturedImage_get_list_controller_1 = require("../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.get.list.controller");
const websiteHomePageFeaturedImage_get_total_count_controller_1 = require("../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.get.total.count.controller");
const multer_middleware_1 = require("../middlewares/multer.middleware");
exports.websiteHomePageFeaturedImageRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.websiteHomePageFeaturedImageRouter.post("/create", token_middleware_1.getAccessTokenInfo, multer_middleware_1.Multer.single('image'), websiteHomePageFeaturedImage_create_controller_1.createWebsiteHomePageFeaturedImageController);
exports.websiteHomePageFeaturedImageRouter.delete("/delete", token_middleware_1.getAccessTokenInfo, websiteHomePageFeaturedImage_delete_controller_1.deleteWebsiteHomePageFeaturedImageController);
exports.websiteHomePageFeaturedImageRouter.get("/get", websiteHomePageFeaturedImage_get_controller_1.getWebsiteHomePageFeaturedImageController);
exports.websiteHomePageFeaturedImageRouter.get("/get/list", websiteHomePageFeaturedImage_get_list_controller_1.getWebsiteHomePageFeaturedImageListController);
exports.websiteHomePageFeaturedImageRouter.get("/get/total/count", websiteHomePageFeaturedImage_get_total_count_controller_1.getWebsiteHomePageFeaturedImageTotalCountController);
//# sourceMappingURL=websiteHomePageFeaturedImage.routes.js.map