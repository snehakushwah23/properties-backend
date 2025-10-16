import { Request, Response } from "express";
import { SUB_ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function subAdminGetInfoController(req: Request, res: Response) {
    try {
        const { accessToken } = req as any;
        const subAdmin = await SUB_ADMIN.findById(accessToken.ID).select("-password");

        if (!subAdmin) {
            return res.status(404).json({ message: responseMessages.ADMIN_NOT_FOUND });
        }

        return res.status(200).json({
            message: responseMessages.ADMIN_FETCHED,
            payload: subAdmin
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
