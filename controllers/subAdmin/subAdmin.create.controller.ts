import { Request, Response } from "express";
import { SUB_ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import md5 from "md5";

export async function subAdminCreateController(req: Request, res: Response) {
    try {
        const { accessToken } = req as any;
        const { name, phoneNumber, countryCode, gender, email, password } = req.body;

        // Check if sub-admin already exists
        const existingSubAdmin = await SUB_ADMIN.findOne({ $or: [{ email }, { phoneNumber }] });
        if (existingSubAdmin) {
            return res.status(409).json({ message: responseMessages.ADMIN_EXISTS });
        }

        // Create new sub-admin
        const newSubAdmin = await SUB_ADMIN.create({
            name,
            phoneNumber,
            countryCode,
            gender,
            email,
            password: md5(password), // Hash password before saving
            createdBy: accessToken.ID, // Admin who created the sub-admin
        });

        return res.status(201).json({
            message: responseMessages.ADMIN_CREATED,
            payload: newSubAdmin
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
