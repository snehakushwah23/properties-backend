"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associateImageRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const multer_middleware_1 = require("../middlewares/multer.middleware");
const associateImage_create_controller_1 = require("../controllers/associateImage/associateImage.create.controller");
const associateImage_get_controller_1 = require("../controllers/associateImage/associateImage.get.controller");
const associateImage_delete_controller_1 = require("../controllers/associateImage/associateImage.delete.controller");
const associateImage_get_list_controller_1 = require("../controllers/associateImage/associateImage.get.list.controller");
const associateImage_get_total_count_controller_1 = require("../controllers/associateImage/associateImage.get.total.count.controller");
exports.associateImageRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.associateImageRouter.post("/create", token_middleware_1.getAccessTokenInfo, multer_middleware_1.Multer.single('image'), associateImage_create_controller_1.createAssociateImageController);
exports.associateImageRouter.delete("/delete", token_middleware_1.getAccessTokenInfo, associateImage_delete_controller_1.deleteAssociateImageController);
exports.associateImageRouter.get("/get", associateImage_get_controller_1.getAssociateImageController);
exports.associateImageRouter.get("/get/list", associateImage_get_list_controller_1.getAssociateImageListController);
exports.associateImageRouter.get("/get/total/count", associateImage_get_total_count_controller_1.getAssociateImageTotalCountController);
//# sourceMappingURL=associateImage.routes.js.map