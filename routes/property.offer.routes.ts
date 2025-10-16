import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { propertyOfferCreateController } from "../controllers/property.offer/property.offer.create.controller"
import { propertyOfferDeleteController } from "../controllers/property.offer/property.offer.delete.controller"
import { propertyOfferGetController } from "../controllers/property.offer/property.offer.get.controller"
import { propertyOfferUpdateController } from "../controllers/property.offer/property.offer.update.controller"
import { getPropertyOfferListController } from "../controllers/property.offer/getPropertyOfferList.controller"

export const propertyOfferRouter = Router({ caseSensitive: true, strict: true })

propertyOfferRouter.post('/create', getAccessTokenInfo, propertyOfferCreateController)
propertyOfferRouter.delete('/delete', getAccessTokenInfo, propertyOfferDeleteController)
propertyOfferRouter.get('/get', propertyOfferGetController)
propertyOfferRouter.patch('/update', getAccessTokenInfo, propertyOfferUpdateController)
propertyOfferRouter.get('/get/list', getPropertyOfferListController)