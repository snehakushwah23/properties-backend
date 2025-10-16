import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { likedPropertyCreateController } from "../controllers/liked.property/linked.property.create.controller"
import { likedPropertyDeleteController } from "../controllers/liked.property/linked.property.delete.controller"
import { getLikedPropertyListController } from "../controllers/liked.property/linked.property.get.controller"

export const likedPropertyRouter = Router({ caseSensitive: true, strict: true })

likedPropertyRouter.post('/create', getAccessTokenInfo, likedPropertyCreateController)
likedPropertyRouter.delete('/delete', getAccessTokenInfo, likedPropertyDeleteController)
likedPropertyRouter.delete('/get', getLikedPropertyListController)