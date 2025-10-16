import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { propertyOtherImageCreateController } from "../controllers/property.other.image/property.other.image.create.controller"
import { propertyOtherImageDeleteController } from "../controllers/property.other.image/property.other.image.delete.controller"
import { propertyOtherImageGetController } from "../controllers/property.other.image/property.other.image.get.controller"
import { propertyOtherImageUpdateController } from "../controllers/property.other.image/property.other.image.update.controller"
import { propertyOtherImageListController } from "../controllers/property.other.image/propertyOtherImageListController"
import { propertyOtherImageOrderUpdateController } from "../controllers/property.other.image/property.other.image.update.order.controller"
import { Multer } from "../middlewares/multer.middleware"

export const propertyOtherImageRouter = Router({ caseSensitive: true, strict: true })

propertyOtherImageRouter.post('/create', getAccessTokenInfo, Multer.single('image'), propertyOtherImageCreateController)
propertyOtherImageRouter.delete('/delete', getAccessTokenInfo, propertyOtherImageDeleteController)
propertyOtherImageRouter.get('/get', propertyOtherImageGetController)
propertyOtherImageRouter.get('/get/list', propertyOtherImageListController)
propertyOtherImageRouter.patch('/update', getAccessTokenInfo, propertyOtherImageUpdateController)
propertyOtherImageRouter.patch('/update/order', getAccessTokenInfo, propertyOtherImageOrderUpdateController)