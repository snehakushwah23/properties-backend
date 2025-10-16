import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import { responseMessages } from "../constants/response.messages"
export function getAccessTokenInfo(req: Request, res: Response, next: NextFunction) {

    try {
        const authToken = req.headers['authorization']?.split(' ')[1] || req.cookies.token        

        jwt.verify(String(authToken), String(process.env.JWT_TOKEN_SECRETE), (err, token): any => {
            if (err) {
                return res.status(401).json({ message: responseMessages.INVALID_JWT_TOKEN })
            } else {
                (req as any).accessToken = token
                next()
            }
        })
    } catch (err) {

        res.status(500).json({ error: responseMessages.EXECUTION_FAILED })
        console.log("ERROR: " + __filename)
        console.log(err)
    }

}