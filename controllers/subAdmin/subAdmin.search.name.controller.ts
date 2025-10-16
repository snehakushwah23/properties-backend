import { Request, Response } from "express";
import { SUB_ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function subAdminSearchByNameController(req: Request, res: Response) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;

        const regex = new RegExp(search as string, "i");
        const sortOrder = order === "asc" ? 1 : -1;

        const subAdmins = await SUB_ADMIN.find({ name: regex })
            .sort({ name: sortOrder })
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
