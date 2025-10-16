import { Request, Response } from "express";
import { NEWS } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function newsGetSearchController(req: Request, res: Response) {
    try {
        const { search } = req.query;

        if (!search) {
            return res.status(400).json({ message: "Search query is required" });
        }

        const newsList = await NEWS.find({ title: { $regex: search, $options: "i" } });

        return res.status(200).json({
            message: "News search results retrieved successfully",
            payload: newsList
        });

    } catch (err) {
        console.error("ERROR in newsGetSearchController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
