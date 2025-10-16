import { Request, Response } from "express";
import { BANK_PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function bankPropertyGetListController(req: Request, res: Response) {
    try {
        const { bankID, page = 1, limit = 10 } = req.query;

        if (!bankID) {
            return res.status(400).json({ message: "Bank ID is required" });
        }

        const bankProperties = await BANK_PROPERTY.find({ bankID })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: responseMessages.BANK_PROPERTY_LIST_FETCHED,
            payload: bankProperties
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
