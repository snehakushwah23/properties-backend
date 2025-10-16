import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { getBuilderAndDeveloperListController } from "../controllers/homepage/homepage.getBuilderAndDeveloperList.controller";
import { getHighlightPropertyListController } from "../controllers/homepage/homepage.getHighlightPropertyList.controller";
import { getSliderImagesController } from "../controllers/homepage/homepage.getSliderImages.controller";
import { getHomepageInfoController } from "../controllers/homepage/homepage.getInfo.controller";

import { createPhoneNumberAndLinksController } from "../controllers/homepage/homepage.create.phoneNumberAndLinks.controller";
import { createQrCodeController } from "../controllers/homepage/homepage.create.qrCode.controller";
import { createWebsiteLogoController } from "../controllers/homepage/homepage.create.websiteLogo.controller";
import { createFooterImageController } from "../controllers/homepage/homepage.create.footerImage.controller";

import { updateFooterAndQrCodeStatusController } from "../controllers/homepage/homepage.update.footerAndQrCodeStatus.controller";
import { Multer } from "../middlewares/multer.middleware";

export const homepageRouter = Router({ caseSensitive: true, strict: true });

homepageRouter.get("/getBuilderAndDeveloperList", getBuilderAndDeveloperListController);
homepageRouter.get("/getHighlightPropertyList", getHighlightPropertyListController);
homepageRouter.get("/getSliderImages", getSliderImagesController);
homepageRouter.get("/getInfo", getHomepageInfoController);

homepageRouter.post("/create/phoneNumberAndLinks", getAccessTokenInfo, createPhoneNumberAndLinksController);
homepageRouter.post("/create/qrCode", getAccessTokenInfo, Multer.single('qrCode'), createQrCodeController);
homepageRouter.post("/create/websiteLogo", getAccessTokenInfo, Multer.single('websiteLogo'), createWebsiteLogoController);
homepageRouter.post("/create/footerImage", getAccessTokenInfo, Multer.single('footerImage'), createFooterImageController);

homepageRouter.put("/update/footerAndQrCodeStatus", getAccessTokenInfo, updateFooterAndQrCodeStatusController);
