import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export function generateJWTToken(data: object, expiresIn: number) {
    return jwt.sign(data, String(process.env.JWT_TOKEN_SECRETE), { expiresIn })
}



