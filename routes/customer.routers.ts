import { Router } from "express"
import { getAccessTokenInfo } from "../middlewares/token.middleware"
import { Multer } from "../middlewares/multer.middleware"

import { customerCreateController } from "../controllers/customer/customer.create.controller"
import { customerLoginPhoneAndPasswordController } from "../controllers/customer/customer.login.phone.and.password.controller"
import { customerLogoutController } from "../controllers/customer/customer.logout.controller"
import { customerUpdateController } from "../controllers/customer/customer.update.controller"
import { customerUpdateProfilePictureController } from "../controllers/customer/customer.update.profile.picture.controller"
import { customerGetController } from "../controllers/customer/customer.get.controller"

export const customerRouter = Router({ caseSensitive: true, strict: true })

customerRouter.post('/create', customerCreateController)
customerRouter.get('/get', getAccessTokenInfo, customerGetController)
customerRouter.post('/login/phoneAndPassword', customerLoginPhoneAndPasswordController)
customerRouter.delete('/logout', getAccessTokenInfo, customerLogoutController)
customerRouter.patch('/update', getAccessTokenInfo, customerUpdateController)
customerRouter.patch('/update/profilePicture', getAccessTokenInfo, Multer.single('profilePicture'), customerUpdateProfilePictureController)