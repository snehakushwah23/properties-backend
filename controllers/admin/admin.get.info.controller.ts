import { Request, Response } from "express";
import { ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function adminGetInfoController(req: Request, res: Response) {
    try {
        const { accessToken } = req as any; // Extract token info from middleware

        // Fetch admin details from DB
        const admin = await ADMIN.findById(accessToken.ID).select("-password");

        if (!admin) {
            return res.status(404).json({ message: responseMessages.ADMIN_NOT_FOUND });
        }

        return res.status(200).json({ 
            message: responseMessages.ADMIN_FETCHED,
            payload: admin 
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
