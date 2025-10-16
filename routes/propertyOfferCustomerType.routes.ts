import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { propertyOfferCustomerTypeCreateController } from "../controllers/propertyOfferCustomerType/propertyOfferCustomerType.create.controller";
import { propertyOfferCustomerTypeDeleteController } from "../controllers/propertyOfferCustomerType/propertyOfferCustomerType.delete.controller";
import { propertyOfferCustomerTypeGetListController } from "../controllers/propertyOfferCustomerType/propertyOfferCustomerType.get.list.controller";
import { propertyOfferCustomerTypeGetController } from "../controllers/propertyOfferCustomerType/propertyOfferCustomerType.get.controller";
import { propertyOfferCustomerTypeUpdateController } from "../controllers/propertyOfferCustomerType/propertyOfferCustomerType.update.controller";

export const propertyOfferCustomerTypeRouter = Router({ caseSensitive: true, strict: true });

propertyOfferCustomerTypeRouter.post('/create', getAccessTokenInfo, propertyOfferCustomerTypeCreateController);
propertyOfferCustomerTypeRouter.delete('/delete', getAccessTokenInfo, propertyOfferCustomerTypeDeleteController);
propertyOfferCustomerTypeRouter.get('/get/list', propertyOfferCustomerTypeGetListController);
propertyOfferCustomerTypeRouter.get('/get', propertyOfferCustomerTypeGetController);
propertyOfferCustomerTypeRouter.patch('/update', getAccessTokenInfo, propertyOfferCustomerTypeUpdateController);
