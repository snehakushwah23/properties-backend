import { Request, Response } from "express"
import { appConfig } from "../../constants/app.config"
import { responseMessages } from '../../constants/response.messages'
import jwt from 'jsonwebtoken'
import md5 from "md5"
import { CUSTOMER } from "../../services/mongodb"

export async function customerLoginPhoneAndPasswordController(req: Request, res: Response) {

    try {

        const { password, phoneNumber, countryCode } = req.body

        const encryptedPassword = md5(password)

        const customer = await CUSTOMER.findOne({ phoneNumber, countryCode, password: encryptedPassword }, { password: 0 })

        if (!customer) {
            return res.status(404).json({ message: responseMessages.CUSTOMER_DOES_NOT_EXIST })
        }

        const customerJWT = jwt.sign({ ID: customer._id }, String(process.env.JWT_TOKEN_SECRETE), { expiresIn: appConfig.JWT_EXPIRE })

        return res.cookie('token', customerJWT, { maxAge: appConfig.COOKIES_MAX_AGE, httpOnly: false }).status(200).json({ message: responseMessages.CUSTOMER_LOGGED_IN_SUCCESSFULLY, payload: customerJWT })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}
