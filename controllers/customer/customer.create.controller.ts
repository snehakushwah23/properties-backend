import { Request, Response } from "express"
import { appConfig } from "../../constants/app.config"
import { responseMessages } from '../../constants/response.messages'
import jwt from 'jsonwebtoken'
import md5 from "md5"
import getPhoneNumberAndCountryCode from 'phone'
import { CUSTOMER } from "../../services/mongodb"
import { firebaseAdmin } from "../../services/firebase"

export async function customerCreateController(req: Request, res: Response) {

    try {

        const { password, firebaseToken, gender, name, customerType } = req.body

        const firebaseUserData = await firebaseAdmin.auth().getUser(firebaseToken)

        const { countryCode, phoneNumber } = getPhoneNumberAndCountryCode(firebaseUserData.phoneNumber)

        const isCustomerExist = await CUSTOMER.findOne({ phoneNumber, countryCode }, { password: 0 })

        if (isCustomerExist) {
            return res.status(404).json({ message: responseMessages.CUSTOMER_ALREADY_EXISTS })
        }

        const encryptedPassword = md5(password)

        const createdCustomer = await CUSTOMER.create({ countryCode, gender, name, phoneNumber: phoneNumber?.replace(countryCode, ''), password: encryptedPassword, customerType })

        const customerJWT = jwt.sign({ ID: createdCustomer._id }, String(process.env.JWT_TOKEN_SECRETE), { expiresIn: appConfig.JWT_EXPIRE })

        return res.cookie('token', customerJWT, { maxAge: appConfig.COOKIES_MAX_AGE, httpOnly: false }).status(200).json({ message: responseMessages.CUSTOMER_CREATED_SUCCESSFULLY, payload: customerJWT })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}
