import { Request, Response } from "express";
import { BANK } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function bankUpdateActiveStatusController(req: Request, res: Response) {
    try {
        const { bankID, status } = req.body;

        if (!bankID || status === undefined) {
            return res.status(400).json({ message: "Bank ID and status are required" });
        }

        const updatedBank = await BANK.findByIdAndUpdate(bankID, { status }, { new: true });

        if (!updatedBank) {
            return res.status(404).json({ message: responseMessages.BANK_NOT_FOUND });
        }

        return res.status(200).json({
            message: responseMessages.BANK_UPDATED,
            payload: updatedBank
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
