import { Router } from "express";
import { getAccessTokenInfo } from "../middlewares/token.middleware";
import { adminCreateController } from "../controllers/admin/admin.create.controller";
import { adminLoginPhoneAndPasswordController } from "../controllers/admin/admin.login.phone.and.password.controller";
import { adminLogoutController } from "../controllers/admin/admin.logout.controller";
import { adminGetListController } from "../controllers/admin/admin.get.list.controller";
import { adminGetInfoController } from "../controllers/admin/admin.get.info.controller";
import { adminCheckEmailController } from "../controllers/admin/admin.check.email.controller";
import { adminSearchByNameController } from "../controllers/admin/admin.search.by.name.controller";
import { adminUpdateProfilePictureController } from "../controllers/admin/admin.update.profilePicture.controller";
import { adminUpdateController } from "../controllers/admin/admin.update.controller";
import { adminDeleteController } from "../controllers/admin/admin.delete.controller";
import { adminDeleteSubAdminController } from "../controllers/admin/admin.delete.subAdmin.controller";

export const adminRouter = Router({ caseSensitive: true, strict: true });

adminRouter.post("/create", getAccessTokenInfo, adminCreateController);
adminRouter.post("/login/phoneAndPassword", adminLoginPhoneAndPasswordController);
adminRouter.delete("/logout", getAccessTokenInfo, adminLogoutController);

adminRouter.get("/get/list", getAccessTokenInfo, adminGetListController);
adminRouter.get("/get/info", getAccessTokenInfo, adminGetInfoController);
adminRouter.get("/get/isEmailPresent", getAccessTokenInfo, adminCheckEmailController);
adminRouter.get("/search/name", getAccessTokenInfo, adminSearchByNameController);

adminRouter.put("/update/profilePicture", getAccessTokenInfo, adminUpdateProfilePictureController);
adminRouter.put("/update", getAccessTokenInfo, adminUpdateController);

adminRouter.delete("/delete", getAccessTokenInfo, adminDeleteController);
adminRouter.delete("/delete/subAdmin", getAccessTokenInfo, adminDeleteSubAdminController);
