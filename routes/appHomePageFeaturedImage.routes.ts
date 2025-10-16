import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { createAppHomePageFeaturedImageController } from "../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.create.controller";
import { deleteAppHomePageFeaturedImageController } from "../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.delete.controller";
import { getAppHomePageFeaturedImageController } from "../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.get.controller";
import { getAppHomePageFeaturedImageListController } from "../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.get.list.controller";
import { getAppHomePageFeaturedImageTotalCountController } from "../controllers/appHomePageFeaturedImage/appHomePageFeaturedImage.get.total.count.controller";
import { Multer } from "../middlewares/multer.middleware";

export const appHomePageFeaturedImageRouter = Router({ caseSensitive: true, strict: true });

appHomePageFeaturedImageRouter.post("/create", getAccessTokenInfo, Multer.single('image'),createAppHomePageFeaturedImageController);
appHomePageFeaturedImageRouter.delete("/delete", getAccessTokenInfo, deleteAppHomePageFeaturedImageController);
appHomePageFeaturedImageRouter.get("/get", getAppHomePageFeaturedImageController);
appHomePageFeaturedImageRouter.get("/get/list", getAppHomePageFeaturedImageListController);
appHomePageFeaturedImageRouter.get("/get/total/count", getAppHomePageFeaturedImageTotalCountController);
