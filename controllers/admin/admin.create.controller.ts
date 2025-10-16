import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { ADMIN } from "../../services/mongodb"
import md5 from "md5"

export async function adminCreateController(req: Request, res: Response) {

    try {

        const { accessToken } = (req as any)        

        const { name, gender, email, phoneNumber, password, countryCode } = req.body

        const admin = await ADMIN.findOne({ $or: [{ email }, { phoneNumber }] })

        if (admin) {
            return res.status(409).json({ message: responseMessages.ADMIN_EXISTS })
        }

        const updatedAdmin: any = await ADMIN.create({ name, gender, countryCode, email, password: md5(password), createdBy: accessToken.ID, phoneNumber, })

        return res.status(200).json({ message: responseMessages.ADMIN_CREATED, payload: updatedAdmin })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}