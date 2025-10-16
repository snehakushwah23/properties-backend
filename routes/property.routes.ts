import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";
import { Multer } from "../middlewares/multer.middleware";

import { propertyCreateController } from "../controllers/property/property.create.controller";
import { propertyDeleteController } from "../controllers/property/property.delete.controller";
import { propertyGetController } from "../controllers/property/property.get.controller";
import { propertyGetListController } from "../controllers/property/property.get.list.controller";
import { propertyUpdateController } from "../controllers/property/property.update.controller";
import { propertyGetCountController } from "../controllers/property/property.get.count.controller";
import { propertyGetActiveCountController } from "../controllers/property/property.get.activeCount.controller";
import { propertyGetListingCountController } from "../controllers/property/property.get.listingCount.controller";
import { propertyGetByLatLngController } from "../controllers/property/property.get.propertyByLatitudeAndLongitude.controller";
import { propertyCountForLatAndLongController } from "../controllers/property/property.get.propertyCountForLatAndLong.controller";
import { propertySearchByAddressController } from "../controllers/property/property.search.address.controller";
import { propertySearchByCityController } from "../controllers/property/property.search.city.controller";
import { propertySearchByReraIDController } from "../controllers/property/property.search.reraID.controller";
import { propertyUpdateCoverImageController } from "../controllers/property/property.update.coverImage.controller";
import { propertyGetListByMultipleFilterController } from "../controllers/property/property.get.propertyListByMultipleFilter.controller";
import { propertyGetLocalityAndBuilderController } from "../controllers/property/property.get.propertyLocalityAndBuilderByCityAndSearch.controller";
import { propertySearchByRegionController } from "../controllers/property/property.search.region.controller";
import { propertySearchByCityAndRegionController } from "../controllers/property/property.search.cityAndRegion.controller";
import { propertyGetTypeListController } from "../controllers/property/property.get.propertyTypeList.controller";
import { propertySearchByNameController } from "../controllers/property/property.search.name.controller";
import { propertyGetByFilterCompressedController } from "../controllers/property/property.get.propertyByFilterCompressed.controller";
import { propertyGetByFilterController } from "../controllers/property/property.get.propertyByFilter.controller";

export const propertyRouter = Router({ caseSensitive: true, strict: true });

propertyRouter.post("/create", getAccessTokenInfo, Multer.single("coverImage"), propertyCreateController);

propertyRouter.get("/get", propertyGetController);

propertyRouter.get("/get/count", propertyGetCountController);
propertyRouter.get("/get/activeCount", propertyGetActiveCountController);
propertyRouter.get("/get/listingCount", propertyGetListingCountController);

propertyRouter.get("/get/list", propertyGetListController);

propertyRouter.get("/get/propertyByLatitudeAndLongitude", propertyGetByLatLngController);
propertyRouter.get("/get/propertyCountForLatAndLong", propertyCountForLatAndLongController);

propertyRouter.get("/search/address", propertySearchByAddressController);
propertyRouter.get("/search/city", propertySearchByCityController);
propertyRouter.get("/search/reraID", propertySearchByReraIDController);
propertyRouter.get("/search/name", propertySearchByNameController);
propertyRouter.get("/search/region", propertySearchByRegionController);
propertyRouter.get("/search/cityAndRegion", propertySearchByCityAndRegionController);

propertyRouter.get("/get/propertyByFilter", propertyGetByFilterController);
propertyRouter.get("/get/propertyByFilterCompressed", propertyGetByFilterCompressedController);
propertyRouter.get("/get/propertyListByMultipleFilter", propertyGetListByMultipleFilterController);
propertyRouter.get("/get/propertyLocalityAndBuilderByCityAndSearch", propertyGetLocalityAndBuilderController);

propertyRouter.get("/get/propertyTypeList", propertyGetTypeListController);

propertyRouter.patch("/update", getAccessTokenInfo, propertyUpdateController);
propertyRouter.patch("/update/coverImage", getAccessTokenInfo, Multer.single("coverImage"), propertyUpdateCoverImageController);

propertyRouter.delete("/delete", getAccessTokenInfo, propertyDeleteController);
