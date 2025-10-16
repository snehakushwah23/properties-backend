import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { specialLinkCreateController } from "../controllers/special.link/special.link.create.controller"
import { specialLinkDeleteController } from "../controllers/special.link/special.link.delete.controller"
import { specialLinkGetController } from "../controllers/special.link/special.link.get.controller"
import { specialLinkListController } from "../controllers/special.link/special.link.get.list.controller"
import { specialLinkUpdateController } from "../controllers/special.link/special.link.update.controller"

export const specialLinkRouter = Router({ caseSensitive: true, strict: true })

specialLinkRouter.post('/create', getAccessTokenInfo, specialLinkCreateController)
specialLinkRouter.delete('/delete', getAccessTokenInfo, specialLinkDeleteController)
specialLinkRouter.get('/get', specialLinkGetController)
specialLinkRouter.get('/get/list', specialLinkListController)
specialLinkRouter.patch('/update', getAccessTokenInfo, specialLinkUpdateController)