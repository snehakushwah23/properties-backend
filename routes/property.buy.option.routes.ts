import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { propertyBuyOptionCreateController } from "../controllers/property.buy.option/property.buy.option.create.controller"
import { propertyBuyOptionDeleteController } from "../controllers/property.buy.option/property.buy.option.delete.controller"
import { propertyBuyOptionGetController } from "../controllers/property.buy.option/property.buy.option.get.controller"
import { propertyBuyOptionUpdateController } from "../controllers/property.buy.option/property.buy.option.update.controller"
import { getPropertyBuyOptionListController } from "../controllers/property.buy.option/getPropertyBuyOptionList.controller"

export const propertyBuyOptionRouter = Router({ caseSensitive: true, strict: true })

propertyBuyOptionRouter.post('/create', getAccessTokenInfo, propertyBuyOptionCreateController)
propertyBuyOptionRouter.delete('/delete', getAccessTokenInfo, propertyBuyOptionDeleteController)
propertyBuyOptionRouter.get('/get', propertyBuyOptionGetController)
propertyBuyOptionRouter.patch('/update', getAccessTokenInfo, propertyBuyOptionUpdateController)
propertyBuyOptionRouter.get('/get/list', getPropertyBuyOptionListController)