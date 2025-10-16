"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const create_user_controller_1 = require("../controllers/user/create.user.controller");
const login_user_phone_and_password_controller_1 = require("../controllers/user/login.user.phone.and.password.controller");
const update_user_profile_controller_1 = require("../controllers/user/update.user.profile.controller");
exports.userRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.userRouter.post('/create', create_user_controller_1.createUserController);
exports.userRouter.post('/login/phoneAndPassword', login_user_phone_and_password_controller_1.userLoginPhoneAndPasswordController);
exports.userRouter.patch('/update/profile', token_middleware_1.getAccessTokenInfo, update_user_profile_controller_1.updateUserProfileController);
//# sourceMappingURL=user.routes.js.map