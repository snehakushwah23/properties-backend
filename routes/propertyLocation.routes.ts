import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { createCityController } from "../controllers/propertyLocation/propertyLocation.city.create.controller";
import { getCityController } from "../controllers/propertyLocation/propertyLocation.city.get.controller";
import { getCityListController } from "../controllers/propertyLocation/propertyLocation.city.getList.controller";
import { searchCityController } from "../controllers/propertyLocation/propertyLocation.city.search.controller";
import { updateCityController } from "../controllers/propertyLocation/propertyLocation.city.update.controller";
import { deleteCityController } from "../controllers/propertyLocation/propertyLocation.city.delete.controller";

import { createRegionController } from "../controllers/propertyLocation/propertyLocation.region.create.controller";
import { getRegionController } from "../controllers/propertyLocation/propertyLocation.region.get.controller";
import { getRegionListController } from "../controllers/propertyLocation/propertyLocation.region.getList.controller";
import { searchRegionController } from "../controllers/propertyLocation/propertyLocation.region.search.controller";
import { updateRegionController } from "../controllers/propertyLocation/propertyLocation.region.update.controller";
import { deleteRegionController } from "../controllers/propertyLocation/propertyLocation.region.delete.controller";

export const propertyLocationRouter = Router({ caseSensitive: true, strict: true });

// City Routes
propertyLocationRouter.post("/city/create", getAccessTokenInfo, createCityController);
propertyLocationRouter.get("/city/get", getCityController);
propertyLocationRouter.get("/city/getList", getCityListController);
propertyLocationRouter.get("/city/search", searchCityController);
propertyLocationRouter.patch("/city/update", getAccessTokenInfo, updateCityController);
propertyLocationRouter.delete("/city/delete", getAccessTokenInfo, deleteCityController);

// Region Routes
propertyLocationRouter.post("/region/create", getAccessTokenInfo, createRegionController);
propertyLocationRouter.get("/region/get", getRegionController);
propertyLocationRouter.get("/region/getList", getRegionListController);
propertyLocationRouter.get("/region/search", searchRegionController);
propertyLocationRouter.patch("/region/update", getAccessTokenInfo, updateRegionController);
propertyLocationRouter.delete("/region/delete", getAccessTokenInfo, deleteRegionController);
