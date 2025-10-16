import { Request, Response } from "express";
import { NEWS } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function newsSearchTitleController(req: Request, res: Response) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;

        if (!search) {
            return res.status(400).json({ message: "Search query is required" });
        }

        const newsList = await NEWS.find({ title: { $regex: search, $options: "i" } })
            .sort({ title: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "News search results retrieved successfully",
            payload: newsList
        });

    } catch (err) {
        console.error("ERROR in newsSearchTitleController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
