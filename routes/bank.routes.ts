import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"
import { Multer } from "../middlewares/multer.middleware"

import { bankCreateController } from "../controllers/bank/bank.create.controller"
import { bankDeleteController } from "../controllers/bank/bank.delete.controller"
import { bankGetController } from "../controllers/bank/bank.get.controller"
import { bankUpdateController } from "../controllers/bank/bank.update.controller"
import { bankUpdateLogoController } from "../controllers/bank/bank.update.logo.controller"
import { bankGetListController } from "../controllers/bank/bank.get.list.controller"
import { bankSearchByNameController } from "../controllers/bank/bank.search.name.controller"
import { bankUpdateActiveStatusController } from "../controllers/bank/bank.update.activeStatus.controller"
import { bankUpdateBannerImageController } from "../controllers/bank/bank.update.bannerImage.controller"

export const bankRouter = Router({ caseSensitive: true, strict: true })

bankRouter.post('/create', getAccessTokenInfo, bankCreateController)
bankRouter.delete('/delete', getAccessTokenInfo, bankDeleteController)
bankRouter.get('/get', bankGetController)
bankRouter.get('/get/list', bankGetListController)
bankRouter.patch('/update', getAccessTokenInfo, bankUpdateController)
bankRouter.patch('/update/logo', getAccessTokenInfo, Multer.single('logo'), bankUpdateLogoController)
bankRouter.get("/search/name", bankSearchByNameController)
bankRouter.patch("/update/activeStatus", getAccessTokenInfo, bankUpdateActiveStatusController)
bankRouter.patch("/update/bannerImage", getAccessTokenInfo, Multer.single("bankBannerImage"), bankUpdateBannerImageController)
