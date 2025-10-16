import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

import { subAdminCreateController } from "../controllers/subAdmin/subAdmin.create.controller";
import { subAdminLoginPhoneAndPasswordController } from "../controllers/subAdmin/subAdmin.login.phoneAndPassword.controller";
import { subAdminLogoutController } from "../controllers/subAdmin/subAdmin.logout.controller";
import { subAdminGetListController } from "../controllers/subAdmin/subAdmin.get.list.controller";
import { subAdminGetInfoController } from "../controllers/subAdmin/subAdmin.get.info.controller";
import { subAdminSearchByNameController } from "../controllers/subAdmin/subAdmin.search.name.controller";
import { subAdminUpdateProfilePictureController } from "../controllers/subAdmin/subAdmin.update.profilePicture.controller";
import { subAdminUpdateController } from "../controllers/subAdmin/subAdmin.update.controller";
import { subAdminDeleteController } from "../controllers/subAdmin/subAdmin.delete.controller";

export const subAdminRouter = Router({ caseSensitive: true, strict: true });

subAdminRouter.post("/create", getAccessTokenInfo, subAdminCreateController);
subAdminRouter.post("/login/phoneAndPassword", subAdminLoginPhoneAndPasswordController);
subAdminRouter.delete("/logout", subAdminLogoutController);

subAdminRouter.get("/get/list", getAccessTokenInfo, subAdminGetListController);
subAdminRouter.get("/get/info", getAccessTokenInfo, subAdminGetInfoController);
subAdminRouter.get("/search/name", getAccessTokenInfo, subAdminSearchByNameController);

subAdminRouter.put("/update/profilePicture", getAccessTokenInfo, subAdminUpdateProfilePictureController);
subAdminRouter.put("/update", getAccessTokenInfo, subAdminUpdateController);

subAdminRouter.delete("/delete", getAccessTokenInfo, subAdminDeleteController);
