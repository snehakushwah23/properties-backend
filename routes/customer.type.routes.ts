import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"
import { customerTypeCreateController } from "../controllers/customer.type/customer.type.create.controller"
import { customerTypeDeleteController } from "../controllers/customer.type/customer.type.delete.controller"
import { customerTypeGetController } from "../controllers/customer.type/customer.type.get.controller"
import { customerTypeUpdateController } from "../controllers/customer.type/customer.type.update.controller"
import { customerTypeGetListController } from "../controllers/customer.type/customerType.getList.controller"
import { customerTypeUpdateIsSpecialController } from "../controllers/customer.type/customerType.update.isSpecial.controller"

export const customerTypeRouter = Router({ caseSensitive: true, strict: true })

customerTypeRouter.post('/create', getAccessTokenInfo, customerTypeCreateController)
customerTypeRouter.delete('/delete', getAccessTokenInfo, customerTypeDeleteController)
customerTypeRouter.get('/get', customerTypeGetController)
customerTypeRouter.get('/get/list', customerTypeGetListController)
customerTypeRouter.patch('/update', getAccessTokenInfo, customerTypeUpdateController)
customerTypeRouter.patch("/update/isSpecial", getAccessTokenInfo, customerTypeUpdateIsSpecialController);