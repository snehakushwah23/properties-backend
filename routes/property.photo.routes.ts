import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { propertyPhotoCreateController } from "../controllers/property.photo/property.photo.create.controller"
import { propertyPhotoDeleteController } from "../controllers/property.photo/property.photo.delete.controller"
import { propertyPhotoGetController } from "../controllers/property.photo/property.photo.get.controller"
import { propertyPhotoUpdateController } from "../controllers/property.photo/property.photo.update.controller"
import { propertyPhotoListController } from "../controllers/property.photo/property.photo.get.list.controller"
import { propertyPhotoOrderUpdateController } from "../controllers/property.photo/property.photo.update.order.controller"
import { Multer } from "../middlewares/multer.middleware"

export const propertyPhotoRouter = Router({ caseSensitive: true, strict: true })

propertyPhotoRouter.post('/create', getAccessTokenInfo, Multer.single('photo'), propertyPhotoCreateController)
propertyPhotoRouter.delete('/delete', getAccessTokenInfo, propertyPhotoDeleteController)
propertyPhotoRouter.get('/get', propertyPhotoGetController)
propertyPhotoRouter.get('/get/list', propertyPhotoListController)
propertyPhotoRouter.patch('/update', getAccessTokenInfo, propertyPhotoUpdateController)
propertyPhotoRouter.patch('/update/order', getAccessTokenInfo, propertyPhotoOrderUpdateController)