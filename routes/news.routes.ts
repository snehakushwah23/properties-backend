import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { newsCreateController } from "../controllers/news/news.create.controller"
import { newsDeleteController } from "../controllers/news/news.delete.controller"
import { newsGetController } from "../controllers/news/news.get.controller"
import { newsUpdateController } from "../controllers/news/news.update.controller"
import { Multer } from "../middlewares/multer.middleware"
import { newsGetListController } from "../controllers/news/news.get.list.controller"
import { newsGetTotalCountController } from "../controllers/news/news.get.totalCount.controller"
import { newsGetTodaysCountController } from "../controllers/news/news.get.todaysNewsCount.controller"
import { newsSearchTitleController } from "../controllers/news/news.search.title.controller"
import { newsGetSearchController } from "../controllers/news/news.get.search.controller"
import { newsUpdateThumbnailController } from "../controllers/news/news.update.thumbnail.controller"

export const newsRouter = Router({ caseSensitive: true, strict: true })

newsRouter.post('/create', getAccessTokenInfo, Multer.single('thumbnail'),newsCreateController)
newsRouter.delete('/delete', getAccessTokenInfo, newsDeleteController)
newsRouter.get('/get', newsGetController)
newsRouter.patch('/update', getAccessTokenInfo, newsUpdateController)
newsRouter.get("/get/list", newsGetListController);
newsRouter.get("/get/totalCount", newsGetTotalCountController);
newsRouter.get("/get/todaysNewsCount", newsGetTodaysCountController);
newsRouter.get("/search/title", getAccessTokenInfo, newsSearchTitleController);
newsRouter.get("/get/search", newsGetSearchController);
newsRouter.patch("/update/thumbnail", getAccessTokenInfo, Multer.single("thumbnail"), newsUpdateThumbnailController);