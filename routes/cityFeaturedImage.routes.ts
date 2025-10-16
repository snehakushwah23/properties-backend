import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { createCityFeaturedImageController } from "../controllers/cityFeaturedImage/cityFeaturedImage.create.controller";
import { deleteCityFeaturedImageController } from "../controllers/cityFeaturedImage/cityFeaturedImage.delete.controller";
import { getCityFeaturedImageController } from "../controllers/cityFeaturedImage/cityFeaturedImage.get.controller";
import { getCityFeaturedImageListController } from "../controllers/cityFeaturedImage/cityFeaturedImage.getList.controller";
import { getCityFeaturedImageCountController } from "../controllers/cityFeaturedImage/cityFeaturedImage.getCount.controller";
import { updateCityFeaturedImageTitleController } from "../controllers/cityFeaturedImage/cityFeaturedImage.update.controller";

import { Multer } from "../middlewares/multer.middleware";

export const cityFeaturedImageRouter = Router({ caseSensitive: true, strict: true });

cityFeaturedImageRouter.post('/create', getAccessTokenInfo, Multer.single('image'), createCityFeaturedImageController);

cityFeaturedImageRouter.delete('/delete', getAccessTokenInfo, deleteCityFeaturedImageController);

cityFeaturedImageRouter.get('/get', getCityFeaturedImageController);

cityFeaturedImageRouter.get('/get/list', getCityFeaturedImageListController);

cityFeaturedImageRouter.get('/get/total/count', getCityFeaturedImageCountController);

cityFeaturedImageRouter.patch('/update', updateCityFeaturedImageTitleController)


