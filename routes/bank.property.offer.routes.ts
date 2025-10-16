import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"
import { bankPropertyCreateController } from "../controllers/bank.property/bank.property.create.controller"
import { bankPropertyDeleteController } from "../controllers/bank.property/bank.property.delete.controller"
import { bankPropertyGetListController } from "../controllers/bank.property/bank.property.get.bankPropertyList.controller"

export const bankPropertyRouter = Router({ caseSensitive: true, strict: true })

bankPropertyRouter.post('/create', getAccessTokenInfo, bankPropertyCreateController )
bankPropertyRouter.post('/get/bankPropertyList', bankPropertyGetListController )
bankPropertyRouter.delete('/delete', getAccessTokenInfo, bankPropertyDeleteController)