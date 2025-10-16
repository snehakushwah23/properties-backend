import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { propertyVideoCreateController } from "../controllers/property.video/property.video.create.controller"
import { propertyVideoDeleteController } from "../controllers/property.video/property.video.delete.controller"
import { propertyVideoGetController } from "../controllers/property.video/property.video.get.controller"
import { propertyVideoUpdateController } from "../controllers/property.video/property.video.update.controller"
import { propertyVideoListController } from "../controllers/property.video/property.video.get.list.controller"
import { propertyVideoOrderUpdateController } from "../controllers/property.video/property.video.update.order.controller"
import { Multer } from "../middlewares/multer.middleware"

export const propertyVideoRouter = Router({ caseSensitive: true, strict: true })

propertyVideoRouter.post('/create', getAccessTokenInfo, Multer.single('video'), propertyVideoCreateController)
propertyVideoRouter.delete('/delete', getAccessTokenInfo, propertyVideoDeleteController)
propertyVideoRouter.get('/get', propertyVideoGetController)
propertyVideoRouter.get('/get/list', propertyVideoListController)
propertyVideoRouter.patch('/update', getAccessTokenInfo, propertyVideoUpdateController)
propertyVideoRouter.patch('/update/order', getAccessTokenInfo, propertyVideoOrderUpdateController)