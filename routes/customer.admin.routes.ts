import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { blockCustomer } from "../controllers/customer.admin/blockCustomer.controller";
import { getCustomerById } from "../controllers/customer.admin/getCustomerById.controller";
import { searchCustomerByPhone } from "../controllers/customer.admin/searchCustomerByPhone.controller";
import { searchCustomerByName } from "../controllers/customer.admin/searchCustomerByName.controller";
import { getCustomerList } from "../controllers/customer.admin/getCustomerList.controller";

export const customerAdminRouter = Router({ caseSensitive: true, strict: true });

customerAdminRouter.put('/admin/block', getAccessTokenInfo, blockCustomer);
customerAdminRouter.get('/admin/get', getAccessTokenInfo, getCustomerById);
customerAdminRouter.get('/admin/search/phoneNumber', getAccessTokenInfo, searchCustomerByPhone);
customerAdminRouter.get('/admin/search/name', getAccessTokenInfo, searchCustomerByName);
customerAdminRouter.get('/admin/get/list', getAccessTokenInfo, getCustomerList);
