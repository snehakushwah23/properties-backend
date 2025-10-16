import { Request, Response } from "express";
import { ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function adminGetListController(req: Request, res: Response) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const admins = await ADMIN.find().skip(skip).limit(limit);
        const total = await ADMIN.countDocuments();

        return res.status(200).json({ 
            message: responseMessages.ADMIN_LIST, 
            payload: { admins, total, page, limit } 
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
