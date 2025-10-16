import { Request, Response } from "express";
import { ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function adminDeleteController(req: Request, res: Response) {
    try {
        const { accessToken } = req as any;

        await ADMIN.findByIdAndDelete(accessToken.ID);

        return res.status(200).json({ message: responseMessages.ADMIN_DELETED });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
