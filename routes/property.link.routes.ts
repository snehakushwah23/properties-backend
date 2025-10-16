import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { propertyLinkCreateController } from "../controllers/property.link/property.link.create.controller"
import { propertyLinkDeleteController } from "../controllers/property.link/property.link.delete.controller"
import { propertyLinkGetController } from "../controllers/property.link/property.link.get.controller"
import { propertyLinkUpdateController } from "../controllers/property.link/property.link.update.controller"
import { propertyLinkListController } from "../controllers/property.link/property.link.get.list.controller"

export const propertyLinkRouter = Router({ caseSensitive: true, strict: true })

propertyLinkRouter.post('/create', getAccessTokenInfo, propertyLinkCreateController)
propertyLinkRouter.delete('/delete', getAccessTokenInfo, propertyLinkDeleteController)
propertyLinkRouter.get('/get', propertyLinkGetController)
propertyLinkRouter.get('/get/list', propertyLinkListController)
propertyLinkRouter.patch('/update', getAccessTokenInfo, propertyLinkUpdateController)