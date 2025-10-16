import { Request, Response } from "express"
import { responseMessages } from '../../constants/response.messages'

export async function customerLogoutController(_req: Request, res: Response) {

    try {

        return res.clearCookie('token').status(200).json({ message: responseMessages.CUSTOMER_LOGGED_OUT_SUCCESSFULLY })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}
