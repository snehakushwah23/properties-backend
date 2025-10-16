import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { CUSTOMER_TYPE } from "../../services/mongodb";

export async function customerTypeGetListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10 } = req.query;

        const customerTypes = await CUSTOMER_TYPE.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: responseMessages.CUSTOMER_TYPE_LIST_FETCHED,
            payload: customerTypes
        });

    } catch (err) {
        console.error("ERROR in customerTypeGetListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
