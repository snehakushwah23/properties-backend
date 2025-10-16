import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BANK } from "../../services/mongodb"

export async function bankGetListController(req: Request, res: Response) {

    try {

        const { page, limit } = req.query

        const bankList = await BANK.find().skip(Number(Number(page) - 1) * Number(limit)).limit(Number(limit))

        return res.status(200).json({ message: responseMessages.BANKS_LIST_FETCHED, payload: bankList })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}