import { Router } from "express";

import { getAdminCountController } from "../controllers/dashboard/dashboard.get.adminCount.controller";
import { getSubAdminCountController } from "../controllers/dashboard/dashboard.get.subAdminCount.controller";
import { getBuilderCountController } from "../controllers/dashboard/dashboard.get.builderCount.controller";
import { getBankCountController } from "../controllers/dashboard/dashboard.get.bankCount.controller";
import { getCustomerCountController } from "../controllers/dashboard/dashboard.get.customerCount.controller";
import { getPropertyCountController } from "../controllers/dashboard/dashboard.get.propertyCount.controller";
import { getNewsCountController } from "../controllers/dashboard/dashboard.get.newsCount.controller";

export const dashboardRouter = Router({ caseSensitive: true, strict: true });

dashboardRouter.get("/get/adminCount", getAdminCountController);
dashboardRouter.get("/get/subAdminCount", getSubAdminCountController);
dashboardRouter.get("/get/builderCount", getBuilderCountController);
dashboardRouter.get("/get/bankCount", getBankCountController);
dashboardRouter.get("/get/customerCount", getCustomerCountController);
dashboardRouter.get("/get/propertyCount", getPropertyCountController);
dashboardRouter.get("/get/newsCount", getNewsCountController);
