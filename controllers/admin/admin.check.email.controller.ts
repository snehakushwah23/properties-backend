import { Request, Response } from "express";
import { ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function adminCheckEmailController(req: Request, res: Response) {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ message: "Email query parameter is required" });
        }

        const admin = await ADMIN.findOne({ email });

        return res.status(200).json({ exists: !!admin });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
