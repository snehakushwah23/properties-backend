import { Request, Response } from "express"
import { appConfig } from "../../constants/app.config"
import { responseMessages } from '../../constants/response.messages'
import jwt from 'jsonwebtoken'
import md5 from "md5"
import { ADMIN } from "../../services/mongodb"

export async function adminLoginPhoneAndPasswordController(req: Request, res: Response) {

    try {

        const { phoneNumber, countryCode, password } = req.body

        const encryptedPassword = md5(password)

        const user = await ADMIN.findOne({ phoneNumber, password: encryptedPassword, countryCode }, { password: 0 })

        if (!user) {
            return res.status(404).json({ message: responseMessages.ADMIN_NOT_FOUND })
        }

        const adminJWT = jwt.sign({ ID: user._id }, String(process.env.JWT_TOKEN_SECRETE), { expiresIn: appConfig.JWT_EXPIRE })
        return res.cookie('token', adminJWT, { maxAge: appConfig.COOKIES_MAX_AGE, httpOnly: false }).status(200).json({ message: responseMessages.ADMIN_LOGGED_IN, payload: adminJWT })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}
