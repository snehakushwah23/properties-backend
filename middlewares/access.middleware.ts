import { NextFunction, Request, Response } from "express"
import { responseMessages } from "../constants/response.messages"
import { ADMIN } from "../services/mongodb"

export async function adminAccessMiddleware(req: Request, res: Response, next: NextFunction) {

    try {
        const accessToken = (req as any).accessToken

        const admin = await ADMIN.findById(accessToken.ID)

        if (!admin) {
            return res.sendStatus(403).json({ message: responseMessages.UNAUTHORIZED })
        }

        return next()

    } catch (err) {
        
        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })
    }

}
