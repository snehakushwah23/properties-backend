import { Request, Response } from "express";
import { SUB_ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import jwt from "jsonwebtoken";
import md5 from "md5";
import { appConfig } from "../../constants/app.config";

export async function subAdminLoginPhoneAndPasswordController(req: Request, res: Response) {
    try {
        const { phoneNumber, countryCode, password } = req.body;
        const encryptedPassword = md5(password);

        // Find sub-admin in DB
        const subAdmin = await SUB_ADMIN.findOne(
            { phoneNumber, countryCode, password: encryptedPassword },
            { password: 0 } // Exclude password field from response
        );

        if (!subAdmin) {
            return res.status(404).json({ message: responseMessages.ADMIN_NOT_FOUND });
        }

        // Generate JWT token
        const subAdminJWT = jwt.sign(
            { ID: subAdmin._id },
            String(process.env.JWT_TOKEN_SECRETE),
            { expiresIn: appConfig.JWT_EXPIRE }
        );

        // Set token in cookies & return response
        return res.cookie("token", subAdminJWT, {
            maxAge: appConfig.COOKIES_MAX_AGE,
            httpOnly: false
        }).status(200).json({
            message: responseMessages.ADMIN_LOGGED_IN,
            payload: subAdminJWT
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
