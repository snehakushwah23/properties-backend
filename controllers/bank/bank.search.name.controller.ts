import { Request, Response } from "express";
import { BANK } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function bankSearchByNameController(req: Request, res: Response) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;

        if (!search) {
            return res.status(400).json({ message: "Search term is required" });
        }

        const banks = await BANK.find({ name: { $regex: search, $options: "i" } })
            .sort({ name: order === "asc" ? 1 : -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: responseMessages.BANK_LIST_FETCHED,
            payload: banks
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
