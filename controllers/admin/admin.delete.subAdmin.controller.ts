import { Request, Response } from "express";
import { ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function adminDeleteSubAdminController(req: Request, res: Response) {
    try {
        const { subAdminId } = req.body;

        if (!subAdminId) {
            return res.status(400).json({ message: "Sub-admin ID is required" });
        }

        await ADMIN.findByIdAndDelete(subAdminId);

        return res.status(200).json({ message: responseMessages.ADMIN_DELETED });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
