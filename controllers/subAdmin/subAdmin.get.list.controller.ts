import { Request, Response } from "express";
import { SUB_ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function subAdminGetListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10 } = req.query;

        const subAdmins = await SUB_ADMIN.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: responseMessages.ADMIN_FETCHED,
            payload: subAdmins
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
