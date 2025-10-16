import { Request, Response } from "express"
import { responseMessages } from '../../constants/response.messages'

export async function adminLogoutController(_req: Request, res: Response) {

    try {

        return res.clearCookie('token').status(200).json({ message: responseMessages.ADMIN_LOGGED_OUT })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}
