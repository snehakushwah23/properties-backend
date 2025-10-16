import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"
import { Multer } from "../middlewares/multer.middleware"

import { builderCreateController } from "../controllers/builder/builder.create.controller"
import { builderDeleteController } from "../controllers/builder/builder.delete.controller"
import { builderGetController } from "../controllers/builder/builder.get.controller"
import { builderUpdateController } from "../controllers/builder/builder.update.controller"
import { builderUpdateLogoController } from "../controllers/builder/builder.update.logo.controller"
import { builderGetListController } from "../controllers/builder/builder.get.list.controller"
import { getBuilderCount } from "../controllers/builder/builder.get.count.controller"
import { getBuilderPropertyCount } from "../controllers/builder/getBuilderPropertyCount.controller"
import { getBuilderActivePropertyCount } from "../controllers/builder/getBuilderActivePropertyCount.controller"
import { getBuilderListingPropertyCount } from "../controllers/builder/getBuilderListingPropertyCount.controller"
import { getListingCount } from "../controllers/builder/getListingCount.controller"
import { getPropertiesList } from "../controllers/builder/getPropertiesList.controller"
import { getCompressedPropertiesList } from "../controllers/builder/getCompressedPropertiesList.controller"
import { searchBuildersByName } from "../controllers/builder/searchBuildersByName.controller"
import { updateBuilderActiveStatus } from "../controllers/builder/updateBuilderActiveStatus.controller"
import { builderUpdateCoverImageController } from "../controllers/builder/builder.update.coverImage.controller"

export const builderRouter = Router({ caseSensitive: true, strict: true })

builderRouter.post('/create', getAccessTokenInfo, Multer.single('logo'),builderCreateController)
builderRouter.delete('/delete', getAccessTokenInfo, builderDeleteController)
builderRouter.get('/get', builderGetController)
builderRouter.get('/get/list', builderGetListController)
builderRouter.patch('/update', getAccessTokenInfo, builderUpdateController)
builderRouter.patch('/update/logo', getAccessTokenInfo, Multer.single('logo'), builderUpdateLogoController)
builderRouter.patch('/update/coverImage', getAccessTokenInfo, Multer.single('coverImage'), builderUpdateCoverImageController)
builderRouter.get("/get/count", getBuilderCount);
builderRouter.get("/get/builderPropertyCount", getBuilderPropertyCount);
builderRouter.get("/get/builderActivePropertyCount", getBuilderActivePropertyCount);
builderRouter.get("/get/builderListingPropertyCount", getBuilderListingPropertyCount);
builderRouter.get("/get/listingCount", getListingCount);
builderRouter.get("/get/propertiesList", getPropertiesList);
builderRouter.get("/get/propertiesList/compressed", getCompressedPropertiesList);
builderRouter.get("/search/name", searchBuildersByName);
builderRouter.put("/update/activeStatus", getAccessTokenInfo, updateBuilderActiveStatus);
