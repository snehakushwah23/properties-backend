import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { createWebsiteHomePageFeaturedImageController } from "../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.create.controller";
import { deleteWebsiteHomePageFeaturedImageController } from "../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.delete.controller";
import { getWebsiteHomePageFeaturedImageController } from "../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.get.controller";
import { getWebsiteHomePageFeaturedImageListController } from "../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.get.list.controller";
import { getWebsiteHomePageFeaturedImageTotalCountController } from "../controllers/websiteHomePageFeaturedImage/websiteHomePageFeaturedImage.get.total.count.controller";
import { Multer } from "../middlewares/multer.middleware";

export const websiteHomePageFeaturedImageRouter = Router({ caseSensitive: true, strict: true });

websiteHomePageFeaturedImageRouter.post("/create", getAccessTokenInfo, Multer.single('image'),createWebsiteHomePageFeaturedImageController);
websiteHomePageFeaturedImageRouter.delete("/delete", getAccessTokenInfo, deleteWebsiteHomePageFeaturedImageController);
websiteHomePageFeaturedImageRouter.get("/get", getWebsiteHomePageFeaturedImageController);
websiteHomePageFeaturedImageRouter.get("/get/list", getWebsiteHomePageFeaturedImageListController);
websiteHomePageFeaturedImageRouter.get("/get/total/count", getWebsiteHomePageFeaturedImageTotalCountController);
