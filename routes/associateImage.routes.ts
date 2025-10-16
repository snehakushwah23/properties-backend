import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { Multer } from "../middlewares/multer.middleware";
import { createAssociateImageController } from "../controllers/associateImage/associateImage.create.controller";
import { getAssociateImageController } from "../controllers/associateImage/associateImage.get.controller";
import { deleteAssociateImageController } from "../controllers/associateImage/associateImage.delete.controller";
import { getAssociateImageListController } from "../controllers/associateImage/associateImage.get.list.controller";
import { getAssociateImageTotalCountController } from "../controllers/associateImage/associateImage.get.total.count.controller";

export const associateImageRouter = Router({ caseSensitive: true, strict: true });

associateImageRouter.post("/create", getAccessTokenInfo, Multer.single('image'),createAssociateImageController);
associateImageRouter.delete("/delete", getAccessTokenInfo, deleteAssociateImageController);
associateImageRouter.get("/get", getAssociateImageController);
associateImageRouter.get("/get/list", getAssociateImageListController);
associateImageRouter.get("/get/total/count", getAssociateImageTotalCountController);
