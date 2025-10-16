import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"

import { propertyPDFCreateController } from "../controllers/property.pdf/property.pdf.create.controller"
import { propertyPDFDeleteController } from "../controllers/property.pdf/property.pdf.delete.controller"
import { propertyPDFGetController } from "../controllers/property.pdf/property.pdf.get.controller"
import { propertyPDFUpdateController } from "../controllers/property.pdf/property.pdf.update.controller"
import { propertyPDFListController } from "../controllers/property.pdf/property.pdf.get.list.controller"
import { Multer } from "../middlewares/multer.middleware"

export const propertyPDFRouter = Router({ caseSensitive: true, strict: true })

propertyPDFRouter.post('/create', getAccessTokenInfo, Multer.single('pdf'),propertyPDFCreateController)
propertyPDFRouter.delete('/delete', getAccessTokenInfo, propertyPDFDeleteController)
propertyPDFRouter.get('/get', propertyPDFGetController)
propertyPDFRouter.get('/get/list', propertyPDFListController)
propertyPDFRouter.patch('/update', getAccessTokenInfo, propertyPDFUpdateController)