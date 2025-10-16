import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { Multer } from "../middlewares/multer.middleware"
import { propertyOfferImageCreateController } from "../controllers/property.offer.image/property.offer.image.create.controller"
import { propertyOfferImageDeleteController } from "../controllers/property.offer.image/property.offer.image.delete.controller"
import { propertyOfferImageGetController } from "../controllers/property.offer.image/property.offer.image.get.controller"
import { propertyOfferImageListController } from "../controllers/property.offer.image/property.offer.image.get.list.controller"
import { propertyOfferImageUpdateController } from "../controllers/property.offer.image/property.offer.image.update.controller"
import { propertyOfferImageOrderUpdateController } from "../controllers/property.offer.image/property.offer.image.update.order.controller"


export const propertyOfferImageRouter = Router({ caseSensitive: true, strict: true })

propertyOfferImageRouter.post('/create', getAccessTokenInfo, Multer.single('image'), propertyOfferImageCreateController)
propertyOfferImageRouter.delete('/delete', getAccessTokenInfo, propertyOfferImageDeleteController)
propertyOfferImageRouter.get('/get', propertyOfferImageGetController)
propertyOfferImageRouter.get('/get/list', propertyOfferImageListController)
propertyOfferImageRouter.patch('/update', getAccessTokenInfo, propertyOfferImageUpdateController)
propertyOfferImageRouter.patch('/update/order', getAccessTokenInfo, propertyOfferImageOrderUpdateController)