import { Request, Response } from "express";
import { CUSTOMER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCustomerCountController(_req: Request, res: Response) {
    try {
        const count = await CUSTOMER.countDocuments();
        return res.status(200).json({
            message: "Customer count retrieved successfully",
            payload: count
        });
    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
